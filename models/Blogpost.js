const mongoose = require('mongoose')

const BlogpostSchema = new mongoose.Schema({
    title: String,
    content: String,
},{
    timestamps: true
})


module.exports = mongoose.models.Blogpost || mongoose.model('Blogpost', BlogpostSchema)

// const Product = mongoose.models && "Product" in mongoose.models ? mongoose.models. Product : mongoose.model("Product", PostSchema);
// export default Product;