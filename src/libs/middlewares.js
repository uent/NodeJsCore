import express from 'express'

module.exports = app => {
    //settings
    app.set('port', 3000);

    //middleware
    app.use(express.json());
}
