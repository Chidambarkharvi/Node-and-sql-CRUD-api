module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('new_table', {
        id: { type: DataTypes.INTEGER, primaryKey: true,
            autoIncrement: true, },
        name: DataTypes.STRING,
        salary: DataTypes.INTEGER

    }, {
        timestanp: false,
        updatedAt: false,
        createdAt: false,
    });
    return Users
}

