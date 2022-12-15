const express=require('express');
const nodemon=require('nodemon');
const oracledb=require('oracledb');
const morgan=require('morgan')


const PORT = 5000;

const app=express();

app.use(morgan('dev'));
app.use(express.json())



//----------------------------------------------------------------------
//------------------------------create----------------------------------
//----------------------------------------------------------------------
//createPedido
app.post('/createPedido', (req,res,next)=>{
    async function createPedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const{A,B,C,D,E,F,G,H,} =req.body;
            const result= await connection.execute(`INSERT INTO PEDIDO (PEDIDO_ID_1, PED_NUMERO, PED_FECHAPED, PED_FECHAENT, PED_TIPOPAGO, PED_CLIENTE, PED_EMPLEADO, PED_PERSONARECIBE) VALUES("$1", $2, TO_DATE("$3"), TO_DATE("$4"), $5, "$6", "$7", "$8")`, [A,B,C,D,E,F,G,H]);
            //INSERT INTO TABLE (COLUMNAS, COLUMNAS) VALUES (VALORES, VALORES)
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    /**,PED_FECHAENT,PED_FECHAPED,PED_TIPOPAGO,PED_CLIENTE,PED_EMPLEADO,PED_PERSONARECIBE */
    createPedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
app.get('/', (req,res,next)=>{
    res.send('Hola pibitos');
});



app.get('/customers', (req,res,next)=>{
    async function fetchDataCustomers(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM CLIENTE');
            return result.rows[0][1];
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    fetchDataCustomers()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
});
//----------------------------------------------------------------------
//------------------------------readAll---------------------------------
//----------------------------------------------------------------------
//PEDIDO
app.get('/readallPedido', (req,res,next)=>{
    async function readAllPedido(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM PEDIDO');
        
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllPedido()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//CLIENTE 
app.get('/readallclientes', (req,res,next)=>{
    async function readAllClientes(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM CLIENTE');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllClientes()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})
//EMPLEADO
app.get('/readallclientes', (req,res,next)=>{
    async function readAllEmpleado(){
        try {
            const connection = await oracledb.getConnection({
                user: 'usr_panaderia',
                password: 'PassPan',
                connectString: 'localhost/xepdb1',
            });
            const result= await connection.execute('SELECT * FROM CLIENTE');
            return result.rows;
        } catch (error) {
            return error;
        }
    }
    readAllClientes()
    .then(dbRes=>{
        console.log(dbRes);
        res.send(dbRes);
    })
    .catch(err=>{
        console.log(err);
        res.send(err)
    })
})






app.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`);
});