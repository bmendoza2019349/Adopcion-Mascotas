// const { validationResult } = require('express-validator');

// const validarCampos = (req, res, next) => {
//     const error = validationResult(req);
//     if(!error.isEmpty){
//         return res.status(400).json(error);
//     }

//     next();
// }

// module.exports = {
//     validarCampos
// }
//request lo que se le ingresa
//response lo que se devuelve

const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty){
        return res.status(400).json(error);
    }

    next();
}

module.exports = {
    validarCampos
}