const {
    getAllDataDB,
    getDataByIdDB,
    createDataDB,
    deleteDataDB,
    } = require("../repository/environment.repository");

async function getAllData(){
    const data = await getAllDataDB();
    return data;
}
async function getDataById(id){
    const data = await getDataByIdDB(id);
    return data;
}

async function createData(label, category, priotity){
    const data = await createDataDB(label, category, priotity);
    return data;
}

async function deleteDataById(id){
    const data = await deleteDataDB(id);
    return data;
}
module.exports = {getAllData, getDataById, createData, deleteDataById}