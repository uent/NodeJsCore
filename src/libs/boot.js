module.exports = app => {

    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log('Server port ', app.get('port'));
        });
    });
};
