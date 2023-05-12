const {getAllDataDB} = require("../repository/environment.repository");

async function getAllData(){
    const data = await getAllDataDB();
    return data;
}

module.exports = {getAllData}