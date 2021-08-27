"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "M Faisal",
          profession: "jurnalis",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "isaljurnalis@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "budi",
          profession: "police",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "budipolice@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "rahman",
          profession: "busnissman",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "rahmanbusnissman@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "aceng",
          profession: "proggamer",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "acengngoding@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "hitler",
          profession: "dictator",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "hitlerdictator@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "aladeen",
          profession: "admiral general",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "aladeenadmiral@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "karl marx",
          profession: "philosohy economic",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "marxisme@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "adam smith",
          profession: "economic revolusioner",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "adamsmith@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "august comte",
          profession: "sosiolog",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "augustsosiolog@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
        {
          name: "alexander agung",
          profession: "yunani philoshopy",
          avatar: "https://i.stack.imgur.com/l60Hf.png",
          email: "alexander@gmail.com",
          password: await bcrypt.hash("qwerty", 10),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
