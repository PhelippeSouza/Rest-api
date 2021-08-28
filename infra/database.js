const pgp = require("pg-promise")()
const db = pgp({
user:"postgres",
password:"Verdade@09",
host:"localhost",
port:5432,
database:"blogestacoesdavida"


})


module.exports=db