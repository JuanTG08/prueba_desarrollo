// Creamos la instancia de la ruta por defecto en express
import { Router } from "express";

const router = Router();

// Importamos funciones de nuestro controlador
const {
    createNewPage, // Creamos nueva pagina
    listAllPages, // Enlistamos todas las paginas
    findOnePageByPath, // Encontramos una nueva pagina por el "path"
    findOnePageById, // Encontramos una pagina por el ID
    modifyOneAccessPage, // Modificamos el acceso de alguna pagina
    disableAccessPages, // Desabilitamos el acceso a una pagina
    deleteAccessPage, // Eliminamos una pagina
} = require('../controller/access-pages.controller');

/*
    CRUD
    C: CREATE
    R: REALOAD
    U: UPDATE
    D: DELETE
*/

router.route('/handdler-CR-access-page')
    .get(listAllPages)
    .post(createNewPage)

router.route('/handdler-RUDD-access-page/:_id')
    .get(findOnePageById)
    .put(modifyOneAccessPage)
    .post(disableAccessPages)
    .delete(deleteAccessPage)

router.route('/handdler-R-access-page/:path')
    .get(findOnePageByPath)

module.exports = router;