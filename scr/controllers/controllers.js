const pool=require('../db');
const bienvenida = (req, res)=>{
    res.send('hola mundo');
};
const dbconection = async(req, res, next)=>{
    try{
        const resultado= await pool.query('SELECT NOW()');
        console.log(resultado);
        res.json(resultado.rows[0].now);
    } catch(error) { 
        next(error);
    }
}   

//CRUD

//CREAR
//CREAR DETALLE DE PEDIDO
const createDetalle_pedido = async(req, res, next)=>{
    try{
        const {PED_NUMERO,PED_CLIENTE,PED_EMPLEADO,PAN_NOMBRE,PED_FECHAPED,PED_FECHAENT,PED_PERSONARECIBE,PAN_TAMAÑO,PAN_TIPOHARINA,PED_TIPOPAGO,PAN_CANTIDAD,PAN_PRECIO} =req.body;
        const resultado= await pool.query('INSERT INTO elementos (title, descripcion) VALUES ($1, $2) RETURNING *',[title, descripcion])
        console.log(resultado);
        res.json(resultado.rows[0]);
    } catch(error) { 
        next(error);
    }
}
// CREAR CLIENTE
const createCliente = async(req, res, next)=>{
    try{
        const {CLI_NOMBRE,CLI_APELLIDOP,CLI_APELLIDOM,CLI_DIRECCION,CLI_REFDI,CLI_LADA,CLI_TELEFONO,CLI_EMAIL} =req.body;
        const resultado= await pool.query('INSERT INTO CLIENTE (CLI_NOMBRE,CLI_APELLIDOP,CLI_APELLIDOM,CLI_DIRECCION,CLI_REFDI,CLI_LADA,CLI_TELEFONO,CLI_EMAIL) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING *',[CLI_NOMBRE,CLI_APELLIDOP,CLI_APELLIDOM,CLI_DIRECCION,CLI_REFDI,CLI_LADA,CLI_TELEFONO,CLI_EMAIL])
        console.log(resultado);
        res.json(resultado.rows[0]);
    } catch(error) { 
        next(error);
    }
}
//CREAR EMPLEADO
const createEmpleado = async(req, res, next)=>{
    try{
        const {EMP_NOMBRE,EMP_APELLIDOP,EMP_APELLIDOM,EMP_SUCURSAL,EMP_DIRECCION,EMP_LADA,EMP_TELEFONO,EMP_EMAIL} =req.body;
        const resultado= await pool.query('INSERT INTO EMPLEADO (EMP_NOMBRE,EMP_APELLIDOP,EMP_APELLIDOM,EMP_SUCURSAL,EMP_DIRECCION,EMP_LADA,EMP_TELEFONO,EMP_EMAIL) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING *',[EMP_NOMBRE,EMP_APELLIDOP,EMP_APELLIDOM,EMP_SUCURSAL,EMP_DIRECCION,EMP_LADA,EMP_TELEFONO,EMP_EMAIL])
        console.log(resultado);
        res.json(resultado.rows[0]);
    } catch(error) { 
        next(error);
    }
}
//CREAR PROVEEDOR
const createProveedor = async(req, res, next)=>{
    try{
        const {PROV_NOMBRE,PROV_APELLIDOP,PROV_APELLIDOM,PROV_NOMBREEMPRESA,PROV_DIRECCION,PROV_LADA,PROV_TELEFONO,PROV_EMAIL} =req.body;
        const resultado= await pool.query('INSERT INTO PROVEEDOR (PROV_NOMBRE,PROV_APELLIDOP,PROV_APELLIDOM,PROV_NOMBREEMPRESA,PROV_DIRECCION,PROV_LADA,PROV_TELEFONO,PROV_EMAIL) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING *',[PROV_NOMBRE,PROV_APELLIDOP,PROV_APELLIDOM,PROV_NOMBREEMPRESA,PROV_DIRECCION,PROV_LADA,PROV_TELEFONO,PROV_EMAIL])
        console.log(resultado);
        res.json(resultado.rows[0]);
    } catch(error) { 
        next(error);
    }
}
//CREAR SUCURSAL
const createSucursal = async(req, res, next)=>{
    try{
        const {SUC_NOMBRE,SUC_DIRECCION,SUC_PAGINAWEB,SUC_LADA,SUC_TELEFONO,SUC_EMAIL} =req.body;
        const resultado= await pool.query('INSERT INTO SUCURSAL (SUC_NOMBRE,SUC_DIRECCION,SUC_PAGINAWEB,SUC_LADA,SUC_TELEFONO,SUC_EMAIL) VALUES ($1, $2,$3,$4,$5) RETURNING *',[SUC_NOMBRE,SUC_DIRECCION,SUC_PAGINAWEB,SUC_LADA,SUC_TELEFONO,SUC_EMAIL])
        console.log(resultado);
        res.json(resultado.rows[0]);
    } catch(error) { 
        next(error);
    }
}

//READ
//READ DETALLE DE PEDIDO
const readAllDetalle_pedidos = async(req, res, next)=>{
    try{
       const AllElementos = await pool.query('SELECT * FROM DETALLE_PEDIDO')
       console.log(AllElementos);
       res.json(AllElementos.rows);
    } catch (error){
        next(error);
    }
};
//READ CLIENTE
const readAllClientes = async(req, res, next)=>{
    try{
       const AllElementos = await pool.query('SELECT * FROM CLIENTE')
       console.log(AllElementos);
       res.json(AllElementos.rows);
    } catch (error){
        next(error);
    }
};
//READ EMPLEADO
const readAllEmpleados = async(req, res, next)=>{
    try{
       const AllElementos = await pool.query('SELECT * FROM EMPLEADO') //
       console.log(AllElementos);
       res.json(AllElementos.rows);
    } catch (error){
        next(error);
    }
};
//READ PROVEEDOR
const readAllProveedores = async(req, res, next)=>{
    try{
       const AllElementos = await pool.query('SELECT * FROM PROVEEDOR') //
       console.log(AllElementos);
       res.json(AllElementos.rows);
    } catch (error){
        next(error);
    }
};

// READ SUCURSAL
const readAllSucursales = async(req, res, next)=>{
    try{
       const AllElementos = await pool.query('SELECT * FROM SUCURSAL') //
       console.log(AllElementos);
       res.json(AllElementos.rows);
    } catch (error){
        next(error);
    }
};

//READ PEDIDO
const readSingleDetalle_pedido = async (req, res, next)=>{
    try {
        const {PED_NUMERO}=req.params;
        const resultado = await pool.query('SELECT * FROM PEDIDO WHERE PED_NUMERO=$1', [PED_NUMERO]);
        console.log(resultado);
        if (resultado.rows.length===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){
        next (error)
    }    
}   
//READ CLIENTE
const readSingleCliente = async (req, res, next)=>{
    try {
        const {CLI_NOMBRE}=req.params;
        const resultado = await pool.query('SELECT * FROM CLIENTE WHERE CLI_NOMBRE=$1', [CLI_NUMERO]);
        console.log(resultado);
        if (resultado.rows.length===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){
        next (error)
    }    
}
//READ EMPLEADO
const readSingleEmpleado = async (req, res, next)=>{
    try {
        const {EMP_NOMBRE}=req.params;
        const resultado = await pool.query('SELECT * FROM EMPLEADO WHERE EMP_NOMBRE=$1', [EMP_NOMBRE]);
        console.log(resultado);
        if (resultado.rows.length===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){
        next (error)
    }    
}
//READ PROVEEDOR
const readSingleProveedor = async (req, res, next)=>{
    try {
        const {PROV_NOMBRE}=req.params;
        const resultado = await pool.query('SELECT * FROM PROVEEDOR WHERE PROV_NOMBRE=$1', [PROV_NOMBRE]);
        console.log(resultado);
        if (resultado.rows.length===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){
        next (error)
    }    
}
//READ SUCURSAL
const readSingleSucursal = async (req, res, next)=>{
    try {
        const {SUC_NOMBRE}=req.params;
        const resultado = await pool.query('SELECT * FROM SUCURSAL WHERE SUC_NOMBRE=$1', [PROV_NOMBRE]);
        console.log(resultado);
        if (resultado.rows.length===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){
        next (error)
    }    
}
//DELETE
//DELETE DETALLE PEDIDO
const deleteDetalle_pedido = async(req, res, next)=>{
    try{
        const {PED_NUMERO}=req.params;
        const resultado=await pool.query('DELETE FROM PEDIDO WHERE PED_NUMERO=$1 RETURNING *', [PED_NUMERO]);
        console.log(resultado);
        if (resultado.rowCount===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){ 
        next(error);
    }
}
//DELETE CLIENTE
const deleteCliente = async(req, res, next)=>{
    try{
        const {CLI_NOMBRE}=req.params;
        const resultado=await pool.query('DELETE FROM CLIENTE WHERE CLI_NOMBRE=$1 RETURNING *', [CLI_NOMBRE]);
        console.log(resultado);
        if (resultado.rowCount===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){ 
        next(error);
    }
}

//DELETE EMPLEADO
const deleteEmpleado = async(req, res, next)=>{
    try{
        const {EMP_NOMBRE}=req.params;
        const resultado=await pool.query('DELETE FROM EMPLEADO WHERE EMP_NOMBRE=$1 RETURNING *', [EMP_NOMBRE]);
        console.log(resultado);
        if (resultado.rowCount===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){ 
        next(error);
    }
}

//DELETE PROVEEDOR
const deleteProveedor = async(req, res, next)=>{
    try{
        const {PROV_NOMBREEMPRESA}=req.params;
        const resultado=await pool.query('DELETE FROM PROVEEDOR WHERE PROV_NOMBREEMPRESA=$1 RETURNING *', [PROV_NOMBREEMPRESA]);
        console.log(resultado);
        if (resultado.rowCount===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){ 
        next(error);
    }
}
//DELETE SUCURSAL
const deleteSucursal = async(req, res, next)=>{
    try{
        const {SUC_NOMBRE}=req.params;
        const resultado=await pool.query('DELETE FROM SUCURSAL WHERE SUC_NOMBRE=$1 RETURNING *', [SUC_NOMBRE]);
        console.log(resultado);
        if (resultado.rowCount===0){
            return res.status(404).json({
                message: 'Elemento no encontrado'
            });
        }
        res.json(resultado.rows[0]);
    } catch (error){ 
        next(error);
    }
}


//UPDATE
//UPDATE DETALLE DE PEDIDO

const updateDetalle_pedido = async (req,res,next)=>{
    try {
        const{PED_NUMERO}=req.params;
        const{PED_CLIENTE,PED_EMPLEADO,PAN_NOMBRE,PED_FECHAPED,PED_FECHAENT,PED_PERSONARECIBE,PAN_TAMAÑO,PAN_TIPOHARINA,PED_TIPOPAGO,PAN_CANTIDAD,PAN_PRECIO}=req.body;
        const resultado = await pool.query('UPDATE DETALLE_PEDIDO SET PED_CLIENTE = $1, PED_EMPLEADO =$2, PAN_NOMBRE =$3, PED_FECHAPED =$4, PED_FECHAENT= $5, PED_PERSONARECIBE =$6, PAN_TAMAÑO =$7, PAN_TIPOHARINA =$8, PED_TIPOPAGO =$9, PAN_CANTIDAD =$10, PAN_PRECIO =$11 WHERE PED_NUMERO=$12 RETURNING *',[PED_CLIENTE,PED_EMPLEADO,PAN_NOMBRE,PED_FECHAPED,PED_FECHAENT,PED_PERSONARECIBE,PAN_TAMAÑO,PAN_TIPOHARINA,PED_TIPOPAGO,PAN_CANTIDAD,PAN_PRECIO,PED_NUMERO]);
        console.log(resultado);
        if(resultado.rows.length===0){
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        next(error);
    }
}

//UPDATE CLIENTE
const updateCliente = async (req,res,next)=>{
    try {
        const{CLI_TELEFONO}=req.params;
        const{CLI_NOMBRE,CLI_APELLIDOP,CLI_APELLIDOM,CLI_DIRECCION,CLI_REFDIR,CLI_LADA,CLI_EMAIL}=req.body;
        const resultado = await pool.query('UPDATE CLIENTE SET CLI_NOMBRE = $1, CLI_APELLIDOP =$2, CLIAPELLIDOM=$3, CLI_DIRECCION =$4, CLI_REFDIR= $5, CLI_LADA=$6, CLI_TELEFONO =$7, CLI_EMAIL=$8 WHERE CLI_TELEFONO=$9  RETURNING *',[CLI_NOMBRE,CLI_APELLIDOP,CLI_APELLIDOM,CLI_DIRECCION,CLI_REFDIR,CLI_LADA,CLI_TELEFONO,CLI_EMAIL]);
        console.log(resultado);
        if(resultado.rows.length===0){
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        next(error);
    }
}

//UPDATE EMPLEADO
const updateEmpleado = async (req,res,next)=>{
    try {
        const{EMP_TELEFONO}=req.params;
        const{EMP_NOMBRE,EMP_APELLIDOP,EMP_APELLIDOM,EMP_SUCURSAL,EMP_DIRECCION,EMP_LADA,EMP_EMAIL}=req.body;
        const resultado = await pool.query('UPDATE CLIENTE SET EMP_NOMBRE=$1,EMP_APELLIDOP=$2,EMP_APELLIDOM=$3,EMP_SUCURSAL=$4,EMP_DIRECCION=$5,EMP_LADA=$6,EMP_TELEFONO=$7,EMP_EMAIL=$8 WHERE EMP_TELEFONO=$9 RETURNING *',[EMP_NOMBRE,EMP_APELLIDOP,EMP_APELLIDOM,EMP_SUCURSAL,EMP_DIRECCION,EMP_LADA,EMP_TELEFONO,EMP_EMAIL]);
        console.log(resultado);
        if(resultado.rows.length===0){
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        next(error);
    }
}

//UPDATE PROVEEDOR 
const updateProveedor = async (req,res,next)=>{
    try {
        const{PROV_NOMBREEMPRESA}=req.params;
        const{PROV_NOMBRE,PROV_APELLIDOP,PROV_APELLIDOM,PROV_DIRECCION,PROV_LADA,PROV_TELEFONO,PROV_EMAIL}=req.body;
        const resultado = await pool.query('UPDATE CLIENTE SET PROV_NOMBRE=$1,PROV_APELLIDOP=$2,PROV_APELLIDOM=$3,PROV_NOMBREEMPRESA=$4,PROV_DIRECCION=$5,PROV_LADA=$6,PROV_TELEFONO=$7,PROV_EMAIL=$8 WHERE PROV_NOMBREEMPRESA=$9 RETURNING *',[PROV_NOMBRE,PROV_APELLIDOP,PROV_APELLIDOM,PROV_NOMBREEMPRESA,PROV_DIRECCION,PROV_LADA,PROV_TELEFONO,PROV_EMAIL]);
        console.log(resultado);
        if(resultado.rows.length===0){
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        next(error);
    }
}

//UPDATE SUCURSAL
const updateSucursal = async (req,res,next)=>{
    try {
        const{SUC_NOMBRE}=req.params;
        const{SUC_DIRECCION,SUC_PAGINAWEB,SUC_LADA,SUC_TELEFONO,SUC_EMAIL}=req.body;
        const resultado = await pool.query('UPDATE CLIENTE SET SUC_NOMBRE=$1,SUC_DIRECCION=$2,SUC_PAGINAWEB=$3,SUC_LADA=$4,SUC_TELEFONO=$5,SUC_EMAIL=$6 WHERE SUC_NOMBRE=$7 RETURNING *',[SUC_NOMBRE,SUC_DIRECCION,SUC_PAGINAWEB,SUC_LADA,SUC_TELEFONO,SUC_EMAIL]);
        console.log(resultado);
        if(resultado.rows.length===0){
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
        return res.json(resultado.rows[0]);
    } catch (error) {
        next(error);
    }
}


module.exports={bienvenida, dbconection, createDetalle_pedido, createCliente, createEmpleado, createProveedor, createSucursal, 
    readAllDetalle_pedidos, readAllClientes, readAllEmpleados, readAllProveedores, readAllSucursales, 
    readSingleDetalle_pedido, readSingleCliente, readSingleEmpleado, readSingleProveedor, readSingleSucursal, 
    deleteDetalle_pedido, deleteCliente, deleteEmpleado, deleteProveedor, deleteSucursal, 
    updateDetalle_pedido, updateCliente, updateEmpleado, updateProveedor, updateSucursal};