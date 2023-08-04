const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)

// const Product = mongoose.models && "Product" in mongoose.models ? mongoose.models. Product : mongoose.model("Product", PostSchema);
// export default Product;