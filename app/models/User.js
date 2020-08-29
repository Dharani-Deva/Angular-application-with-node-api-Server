module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user_list", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
};