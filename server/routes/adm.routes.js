const { getProducts, newProduct, getOneProduct, editProduct, deleteProduct} = require("../controllers/adm.controllers")


module.exports = (app) =>{
    app.get("/api/product", getProducts);
    app.post("/api/product/new", newProduct);
    app.get("/api/product/:id", getOneProduct);
    app.put("/api/product/edit/:id", editProduct);
    app.delete("/api/product/delete/:id", deleteProduct);
};