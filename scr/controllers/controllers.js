const pool=require('../db');
const bienvenida = (req, res)=>{
    res.send('hola mundo');
};
const dbconection = async(req, res)=>{
    const resultado= await pool.query('SELECT NOW()');
    console.log(resultado);
}
module.exports={bienvenida, dbconection};
