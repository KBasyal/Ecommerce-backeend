class UserService{
    count= async ({filter})=>{
        try{
            const countData = await UserService.MOdel.countDocument()
            return countData;
        }catch(exception){
            throw exception
        }
    }
    listAll = async ({ limit, skip, filter = {} }) => {
        try {
            const response = await ProductModel.find(filter)
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
}
const userSvc = new UserService()
module.exports = userSvc