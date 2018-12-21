' use strict '
const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    console.log(req.body);
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrectos'
                }
            })
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(404).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrectos'
                }
            })
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED_TOKEN, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })

    })
})

module.exports = router;