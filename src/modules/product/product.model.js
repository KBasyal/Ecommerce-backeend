const mongoose = require ("mongoose")
const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique: true
    },
    slug:{
        type:String,
        require:true,
        unique:true
    },
    summary:{
        type:String,
        require: true,
    },
    descritpion:{ 
        type:s=String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    discount:{
        type: Number,
    },
    afterDiscount:{
        //
    },
    featured:{
        type:Boolean,
        default:false
    }


})