const express = require('express');
module.exports = function (Model, modelKey) {
    // create new express router
    const router = express.Router();
    router.get(`/api/${modelKey}/`, Model.getAll);
    router.get(`/api/${modelKey}/:id`, Model.getById);
    router.post(`/api/${modelKey}/`, Model.create);
    router.delete(`/api/${modelKey}/:id`, Model.delete);
    router.put(`/api/${modelKey}/:id`, Model.update);
    return router;
}