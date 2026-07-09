const cloudinary = require('../config/cloudinary');
const fs = require('fs');


const uploadImage = async (file) => {

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
  // upload para Cloudinary
  const result = await cloudinary.uploader.upload(file.path, options);
  console.log("===============UPLOAD SERVICES===========",result);
  // remove arquivo temporário do servidor
  fs.unlinkSync(file.path);

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
  }catch(error){
    console.log(error)
  }
};


module.exports = {
  uploadImage,
};
