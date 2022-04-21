
module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('user', {
       name:DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING

    }, {
        timestanp: false,
        updatedAt: false,
        createdAt: false,
    });
    return Users
}