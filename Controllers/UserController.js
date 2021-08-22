const { Users, Token } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();
const bcrypt = require("bcrypt");
const { JWT_SECRET, JWT_TOKEN_EXPIRED } = process.env;
const jwt = require("jsonwebtoken");
module.exports = {
  userRegister: async (req, res) => {
    const rules = {
      name: "string|empty:false",
      email: "string|empty:false",
      password: "string|empty:false|min:6",
      profession: "string|optional",
    };
    const validate = v.validate(req.body, rules);

    if (validate.length) {
      return res.status(400).json({ status: "error", message: validate });
    }
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user) {
      return res
        .json({ status: "error", message: "email already exist" })
        .status(404);
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const data = {
      password,
      name: req.body.name,
      email: req.body.email,
      profession: req.body.profession ? "unknow" : req.body.profession,
      role: "user",
      avatar: "https://i.stack.imgur.com/l60Hf.png",
    };
    const createUser = await Users.create(data);

    return res.json({
      status: "success",
      data: { id: createUser.id },
    });
  },
  userLogin: async (req, res) => {
    const rules = {
      email: "string|empty:false",
      password: "string|empty:false|min:6",
    };
    const validate = v.validate(req.body, rules);
    if (validate.length) {
      return res.status(400).status({ status: "error", message: validate });
    }
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res
        .status(404)
        .json({ message: "email not found", status: "error" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.json({ status: "error", message: "password wrong" });
    }
    const token = jwt.sign(
      {
        data: {
          id: user.id,
          email: user.email,
          avatar: user.avatar,
          role: user.role,
        },
      },
      JWT_SECRET,
      { expiresIn: JWT_TOKEN_EXPIRED }
    );
    await Token.create({ token: token, user_id: user.id });
    return res.json({
      status: "success",
      token,
    });
  },
  userLogout: async (req, res) => {
    const user_id = req.body.user_id;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.json({ status: "error", message: "user not found" });
    }
    await Tekon.destroy({ where: { user_id } });
    return res.json({
      status: "succes",
      message: "token deleted",
    });
  },
  user: async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id, {
      attributes: ["id", "name", "profession", "avatar", "email"],
    });
    if (!user) {
      return res
        .json({ status: "error", message: "user not found" })
        .status(404);
    }
    user.avatar = `${req.get("host")}/${user.avatar}`;
    return res.json({
      status: "success",
      data: user,
    });
  },
  users: async (req, res) => {
    const user = await Users.findAll();
    return res.json({
      status: "success",
      data: user,
    });
  },
  userDestroy: async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    if (!user) {
      return res
        .json({ status: "error", message: "user not found" })
        .status(404);
    }
    await user.destroy();
    return res.json({ status: "success", message: "deleted" });
  },
  userUpdate: async (req, res) => {
    try {
      const rules = {
        name: "string|empty:false",
        email: "string|empty:false",
        password: "string|empty:false|min:6",
        profession: "string|optional",
        avatar: "string|optional",
      };
      const validate = v.validate(req.body, rules);
      if (validate.length) {
        return res.json({ status: "error", massage: validate }).status(400);
      }
      const user_id = req.body.user_id;
      const user = await Users.findByPk(user_id);
      if (!user) {
        return res
          .json({ status: "error", message: "user not found" })
          .status(404);
      }
      const email = req.body.email;
      if (email) {
        const checkEmail = await Users.findOne({ where: { email } });
        if (email && checkEmail !== user.email) {
          return res.json({ status: "error", massage: "email already exist" });
        }
      }
      const password = await bcrypt.hash(req.body.password, 10);
      const { name, profession, avatar } = req.body;

      await user.update({ email, name, profession, password, avatar });
      return res.json({
        status: "success",
        data: {
          id: user.id,
          name,
          email,
          profession,
          avatar,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ massage: error, status: "error" });
    }
  },
};
