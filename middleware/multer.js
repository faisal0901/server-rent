const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
    checkFileType(file, cb);
  },
});
const uploadImage = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {},
}).array("image");
function checkFileType(file, cb) {
  const fileTypes = /jpeg|png|jpg|gif|svg/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeTypes = fileTypes.test(file.mimeTypes);
  if (mimeTypes && extName) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !!!");
  }
}
module.exports = uploadImage;
