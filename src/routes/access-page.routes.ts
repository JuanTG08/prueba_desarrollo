// Creamos la instancia de la ruta por defecto en express
import { Router } from "express";

const router = Router();

// Importamos funciones de nuestro controlador
const {
    createNewPage,
    listAllPages,
    findOnePageByPath,
    findOnePageById,
    modifyOneAccessPage,
    disableAccessPages,
    deleteAccessPage,
} = require('../controller/access-pages.controller');

router.route('/')
    .get(listAllPages)
    .post(createNewPage)

router.route('/id/:_id')
    .get(findOnePageById)
    .put(modifyOneAccessPage)
    .post(disableAccessPages)
    .delete(deleteAccessPage)

router.route('/path/:path')
    .get(findOnePageByPath)

module.exports = router;