//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar um objeto de banco de dados
const db=new sqlite3.Database("./src/database/database.db")

//utilizar o banco de daddos para nossas operações
db.serialize(()=>{
    //criar trabelas //templates
    db.run(`
        create table if not exists places(
            id integer primary key autoincrement,
            image TEXT,
            name text,
            address text,
            address2 text,
            state text,
            city text,
            items text
        );
    `)

})

//utilizar o banco de daddos para nossas operações
module.exports=db;