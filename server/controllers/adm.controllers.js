const Adm = require("../models/adm.model")

module.exports.getProducts = (req,res) => {
    Adm.find()
        .then((products)=>res.json({products}))
        .catch((err)=>res.json({message:"Ha ocurrido un error",error:err}));
};

module.exports.newProduct = (req,res) => {
    Adm.create(req.body)
        .then((newProduct)=>res.json({newProduct}))
        .catch((err)=>res.json({message:"Ha ocurrido un error",error:err}));
};

module.exports.getOneProduct = (req, res)=>{
    Adm.findOne({_id:req.params.id})
    .then((product)=>res.json({Product:product}))
    .catch((err)=>res.json({message:"Ha ocurrido un error",error:err}));
}


module.exports.editProduct = (req,res) =>{
    Adm.findOneAndUpdate({_id: req.params.id},req.body,{runValidators:true, new:true})
        .then((productEdited)=>res.json({product:productEdited}))
        .catch((err)=>res.json({message:"Ha ocurrido un error",error:err}));
};

module.exports.deleteProduct = (req,res) =>{
    Adm.deleteOne({_id: req.params.id})
        .then((result)=>res.json({result:result}))
        .catch((err)=>res.json({message:"Ha ocurrido un error",error:err}));
};
