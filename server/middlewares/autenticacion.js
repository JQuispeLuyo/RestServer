const jwt = require('jsonwebtoken');

//Verificaion de token
let verificaToken = (req, res, next) => {

    let token = req.get('token');
    console.log(token);
    jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "error al verificar token"
                }
            })
        }

        console.log(decoded.usuario);

        req.usuario = decoded.usuario;

        console.log(req.usuario);

        next();

    })

};


let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === "ADMIN_ROLE") {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: "Esta accion solo la puede realizar el administrador"
            }
        })
    }


}


module.exports = {
    verificaToken,
    verificaAdmin_Role
}