const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        name: {
            type: Sequelize.STRING
        },
        desc: {
            type: Sequelize.STRING
        },
        // isAvailable:{
        //     type:Sequelize.BOOLEAN
        // },
        // productAddedDate:{
        //     type:Sequelize.DATE,
        //     defaultValue:DataTypes.ARRAY
        // }
    })
    return Product;
}