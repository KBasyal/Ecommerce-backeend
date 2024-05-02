const productSvc = require("./product.service");

class ProductController{
    create = async (req, res, next)=>{
        try{
            const payload = await productSvc.transformCreateData(req);
            const createdProduct = await productSvc.store(payload);
            res.json({
                result:createdProduct,
                message: "Product created successfully",
                meta: null
            })

        }catch(exception){
            next(exception)
        }
    }
    index = async(req, res, next)=>{
        try{
            const page = +req.query.page || 1;
            const limit = +req.query.page || 15;
            // databse table has 1-100 id 
            // per page 15
            // 1-15 ===>page 1
            const skip = (page -1)*limit;
            let filter = {};
            if(req.query.search){
                filter = {
                    title: new RegExp(req.query.search, 'i')
                }
            }
            const data = await brandSvc.listAll({
                limit :limit,
                skip:skip,
                filter: filter
            });
            const countData = await brandSvc.count({
                filter : filter
            })
            res.json({
                result: data,
                message:"Brand List",
                meta:{
                    limit: limit,
                    page: page,
                    total :countData
                }
            })


        }catch(exception){
            next(exception)
        }
    }
    show= async(req, res , next) =>{
        try{
            const detail = await productSvc.findOne({
                _id: req.params.id
            })
            res.json({
                result:detail,
                message: "Product Detail fetched",
                meta: null
            })

        }catch(exception){
            next(exception)
        }
    }
    update =async(req, res, next)=>{
        try{
            const existingData = await productSvc.findOne({
                _id: req.params.id
            })
            const payload =productSvc.transformUpdateData(req, existingData)
            const updateStatus = await productSvc.update({_id: req.params.id}, payload)
            res.json({
                result: updateStatus,
                messsage:"Data updated",
                meta : null
                
            })

        }catch(exception){
            next(exception)
        }

    }
    delete= async(req, res, next)=>{
        try{
            const exists = await  productSvc.findOne({_id : req.params.id})
            const status = await productSvc.deleteOne({_id : req.params.id});
            res.json({
                result : status,
                message : " Product deleted successfuly",
                meta : null
            })

        }catch(exception){
            next(exception)
        }
    }
    listForHome = async(req, res, next) =>{
        try{
            const list = await productSvc.getForHome()
            res.json({
                result: list,
                message:"Product listed successfully",
                meta: null
            })

        }catch(exception){
            next(exception)

        }
    }
}
const productCtrl = new ProductController()
module.exports = productCtrl;