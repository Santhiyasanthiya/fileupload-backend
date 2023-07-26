const mysql = require ("mysql2");
require('dotenv').config()

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"santhiya2525",
    database:"usimgupload",
})



conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = conn