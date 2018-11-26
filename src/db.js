import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = app => {
    const config = app.libs.config;

    if(!db) {
        const sequelize = new Sequelize(
            config.storage,
            config.username,
            config.password,
            {host: config.host, dialect: 'sqlite'}
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, 'models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });

        return db;

    } else {
        return db;
    }
}
