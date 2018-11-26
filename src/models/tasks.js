module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define('Tasks', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: false
        }
    });

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users, {
            foreignKey: {
                name: 'id',
                allowNull: false
            }
        })
    };

    return Tasks;
};
