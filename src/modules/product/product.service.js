const ProductModel = require("./product.model");
const slugify = require("slugify")
class ProductService {
    transformCreateData = async (req) => {
        try {

            uniqueSlug = async (slug) => {
                try {
                    const prodcutExists = await ProductModel.findOne({
                        slug: slug
                    })
                    if (productsExists) {
                        //not unique
                        const time = Date.now();
                        slug = slud + "-" + time;
                        await this.uniqueSlug(slug)
                    } else {
                        // unique
                        return slug
                    }

                } catch (exception) {
                    throw exception
                }
            }
            const data = {
                ...req.body
            }
            if (req.files) {
                let images = [];
                req.files.map((image) => {
                    images.push(image.filename);
                })
                data.images = images
            } else {
                data.images = null;
            }
            let slug = slugify(data.title, {
                lower: true
            })
            
            data.slug = await this.uniqueSlug(slug)
            // after dcisount
            data.afterDiscount = data.price - data.price * data.discount / 100
            // if brand is not set null
            if (!data.brand || data.brand === 'null' || data.brand === "") {
                data.brand = null;
            }
            // if sellerID is not set null
            if (!data.sellerId || data.sellerId === 'null' || data.sellerId === "") {
                data.sellerId = null;
            }
            // if categories is not set null
            if (!data.categories || data.categories === 'null' || data.categories === "") {
                data.categories = null;
            }

            data.createBy = req.authUser._id;
            return data;

        } catch (exception) {
            throw exception
        }

    }
    transformUpdateData = (req, existingData) => {
        const data = {
            ...req.body
        }
        let images = [...existingData.images];
        if (req.files) {

            req.files.map((image) => {
                images.push(image.filename);
            })
        }
        data.images = images;
        // after dcisount
        data.afterDiscount = data.price - data.price * data.discount / 100
        // if brand is not set null
        if (!data.brand || data.brand === 'null' || data.brand === "") {
            data.brand = null;
        }
        // if sellerID is not set null
        if (!data.sellerId || data.sellerId === 'null' || data.sellerId === "") {
            data.sellerId = null;
        }
        // if categories is not set null
        if (!data.categories || data.categories === 'null' || data.categories === "") {
            data.categories = null;
        }

        data.updatedBy = req.authUser._id;
        return data;

    }
    store = async (data) => {
        try {
            const product = new ProductModel(data);
            return await product.save()
        } catch (exception) {
            (exception)
        }
    }
    count = async (filter) => {
        try {
            const countData = await ProductModel.countDocuments(filter);
            return countData;

        } catch (exception) {
            throw exception
        }
    }
    listAll = async ({ limit, skip, filter = {} }) => {
        try {
            const response = await ProductModel.find(filter)
                .populate("categories", ["_id", "title", "slug"])
                .populate("brand", ["_id", "title", "slug"])
                .populate("sellerId", ["_id", "title", "email", "role"])
                .populate("createdBy", ["_id", "name", "email", "role"])
                .populate("updatedBy", ["_id", "name", "email", "role"])
                .sort({ _id: "desc" })
                .skip(skip)
                .limit(limit)
            return response;
        } catch (exception) {
            throw (exception);
        }
    }
    findOne = async (filter) => {
        try {
            const data = await ProductModel.findOne(filter);
            if (!data) {
                throw { code: 400, message: "Data not found" }
            }
            return data;

        } catch (exception) {
            throw exception
        }
    }
    update = async (filter, data) => {
        try {
            const updateResponse = await ProductModel.findOneAndUpdate(filter, { $set: data })
            return updateResponse

        } catch (exception) {
            throw exception;
        }
    }
    deleteOne = async (filter) => {
        try {
            const response = await ProductModel.findOneAndDelete(filter)
            if (!response) {
                throw { code: 404, message: " Product does not exists" }
            }
            return response

        } catch (exception) {
            throw exception
        }
    }

    getForHome = async () => {
        try {
            const data = await ProductModel.find({
                status: "active"
            })
                .populate("categories", ["_id", "title", "slug"])
                .populate("brand", ["_id", "title", "slug"])
                .populate("sellerId", ["_id", "title", "email", "role"])
                .populate("createdBy", ["_id", "name", "email", "role"])
                .populate("updatedBy", ["_id", "name", "email", "role"])
                .sort({ _id: "desc" })
                .limit(10)
            return data

        } catch (exception) {
            throw exception;
        }
    }
}
const productSvc = new ProductService()
module.exports = productSvc;