const {getAllDataDB} = require("../repository/environment.repository");

async function getAllData(){
    const data = getAllDataDB();
    return data;
}
module.exports = {getAllData}