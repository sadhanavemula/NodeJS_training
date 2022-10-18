const config = require('../configs/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.brands = require('./brand.model')(sequelize, Sequelize);
db.products = require('./product.model')(sequelize, Sequelize);
db.categories = require('./category.model')(sequelize, Sequelize);
db.feedbacks = require('./feedback.model')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreginKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreginKey: "userId",
    otherKey: "roleId"
});

//Relationship (OneToMany) (1 Product -->Many brands)
db.brands.hasMany(db.products,{as:"products"});
db.products.belongsTo(db.brands,{
    foreginKey: 'brandId',
    as:'brand'
})

//Relationship (OneToMany)
db.categories.hasMany(db.products,{as:"product"});
db.products.belongsTo(db.categories,{
    foreginKey: 'categoryId',
    as:'category'
})

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
