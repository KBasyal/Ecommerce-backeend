const categorySvc = require("./category.service");
const productSvc = require("../product/product.service")

class CategoryController {
    create = async (req, res, next) => {
        try {
            const payload = categorySvc.transformCreateData(req);
            const createdCategory = await categorySvc.store(payload);
            res.json({
                result: createdCategory,
                message: "Category created successfully",
                meta: null
            })

        } catch (exception) {
            next(exception)
        }
    }
    index = async (req, res, next) => {
        try {
            const page = +req.query.page || 1;
            const limit = +req.query.page || 15;
            // databse table has 1-100 id 
            // per page 15
            // 1-15 ===>page 1
            const skip = (page - 1) * limit;
            let filter = {};
            if (req.query.search) {
                filter = {
                    title: new RegExp(req.query.search, 'i')
                }
            }
            const data = await categorySvc.listAll({
                limit: limit,
                skip: skip,
                filter: filter
            });
            const countData = await categorySvc.count({
                filter: filter
            })
            res.json({
                result: data,
                message: "Category List",
                meta: {
                    limit: limit,
                    page: page,
                    total: countData
                }
            })

        } catch (exception) {
            next(exception)
        }
    }
    show = async (req, res, next) => {
        try {
            const detail = await categorySvc.findOne({
                _id: req.params.id
            })
            res.json({
                result: detail,
                message: "Category Detail fetched",
                meta: null
            })

        } catch (exception) {
            next(exception)
        }
    }
    update = async (req, res, next) => {
        try {
            const existingData = await categorySvc.findOne({
                _id: req.params.id
            })
            const payload = categorySvc.transformUpdateData(req, existingData)
            const updateStatus = await categorySvc.update({ _id: req.params.id }, payload)
            res.json({
                result: updateStatus,
                messsage: "Data updated",
                meta: null

            })

        } catch (exception) {
            next(exception)
        }

    }
    delete = async (req, res, next) => {
        try {
            const exists = await categorySvc.findOne({ _id: req.params.id })
            const status = await categorySvc.deleteOne({ _id: req.params.id });
            res.json({
                result: status,
                message: " Category deleted successfuly",
                meta: null
            })

        } catch (exception) {
            next(exception)
        }
    }
    listForHome = async (req, res, next) => {
        try {
            const list = await categorySvc.getForHome()
            res.json({
                result: list,
                message: "Category listed successfully",
                meta: null
            })

        } catch (exception) {
            next(exception)

        }
    }
    getCategoryBySlug = async (req, res, next) => {
        try {
            const slug = req.params.slug;
            const detail = await categorySvc.findOne({
                slug: slug,
                satus: "active"
            })
            const page = +req.query.page || 1;
            const limit = +req.query.page || 15;
            const skip = (page - 1) * limit;

            let filter = {
                status: "active",
                categories: { $in: [detail._id] }
            };
            if (req.query.search) {
                filter = {
                    ...filter,
                    title: new RegExp(req.query.search, 'i'),
                    summary: new RegExp(req.query.search, 'i'),
                    description: new RegExp(req.query.search, 'i'),

                }
            }
            const total = await productSvc.count(filter);
            const relatedProduct = await productSvc.listAll({
                limit: limit,
                skip: 0,
                filter: filter
            })
            res.json({
                result:{
                    catDetail: detail,
                    productList: relatedProduct
                },
                message:"Product list by category slug",
                meta:{
                    page: page,
                    limit:limit,
                    total: total
                }
            })

        } catch (exception) {
            next(exception)
        }

    }
}
const categoryCtrl = new CategoryController()
module.exports = categoryCtrl;