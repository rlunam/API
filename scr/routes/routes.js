const {Router} = require('express');
const {
    bienvenida,
    dbconection,
    createDetalle_pedido, //CREATE
    createCliente,
    createEmpleado,
    createProveedor,
    createSucursal,
    readAllDetalle_pedidos, //READ ALL
    readAllClientes,
    readAllEmpleados,
    readAllProveedores,
    readAllSucursales,
    readSingleDetalle_pedido, //READ SINGLE
    readSingleCliente,
    readSingleEmpleado,
    readSingleProveedor,
    readSingleSucursal,
    deleteDetalle_pedido,
    deleteCliente,
    deleteEmpleado,
    deleteProveedor,
    deleteSucursal,
    updateDetalle_pedido,
    updateCliente,
    updateEmpleado,
    updateProveedor,
    updateSucursal
}  = require('../controllers/controllers');

const router = Router();

router.get('/', bienvenida);
router.get('/dbconection', dbconection);
router.get('/readalldetallepedidos',readAllDetalle_pedidos); //READ ALL
router.get('/readallclientes', readAllClientes);
router.get('/readallempleados', readAllEmpleados);
router.get('/readallproveedores',readAllProveedores);
router.get('/readallsucursales', readAllSucursales);
router.get('/readsingledetallepedido/:id', readSingleDetalle_pedido); //READ SINGLE
router.get('/readsinglecliente/:id', readSingleCliente);
router.get('/readsingleempleado/:id', readSingleEmpleado);
router.get('/readsingleproveedor/:id', readSingleProveedor);
router.get('/readsinglesucursal/:id', readSingleSucursal);
router.post('/createdetallepedido', createDetalle_pedido); //CREATE
router.post('/createcliente', createCliente);
router.post('/createempleado', createEmpleado);
router.post('/createproveedor', createProveedor);
router.post('/createsucursal', createSucursal);
router.delete('/deletedetallepedido/:id', deleteDetalle_pedido); //DELETE
router.delete('/deletecliente/:id', deleteCliente);
router.delete('/deleteempleado/:id', deleteEmpleado);
router.delete('/deleteproveedor/:id', deleteProveedor);
router.delete('/deletesucursal/:id', deleteSucursal);
router.put('/updatedetallepedido/:id',updateDetalle_pedido); //UPDATE
router.put('/updatecliente/:id', updateCliente);
router.put('/updateempleado/:id', updateEmpleado);
router.put('/updateproveedor/:id', updateProveedor);
router.put('/updatesucursal/:id', updateSucursal);

module.exports = router;
