module.exports = app => {
    const Users = app.db.models.Users;

    app.route('/users/:id')
        .get((req, res) => {
            Users.findById(req.params.id, {
                attributes: ['id', 'name', 'email']
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })

    app.route('/users')
        .post((req, res) => {
            Users.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(421).json({msg: error.message});
                })
        })
};
