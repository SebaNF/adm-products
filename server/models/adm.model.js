const mongoose = require("mongoose");

const admSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Debe ingresar un producto"],
        minlength: [3, "titulo debe tener al menos 3 caracteres"]
        
    }, 
    price:{
        type: Number,
        required: [true, "Debe ingresar el precio del producto"],
        min: [1, "el precio debe ser mayor 1"]
    } ,
    description:{
        type: String,
        required: [true, "Debe ingresar una descripcion"],
        minlength: [3, "descripcion debe tener al menos 3 caracteres"]
        
    }
},{timestamps: true });

const Adm = mongoose.model("Adm",admSchema);

module.exports = Adm;