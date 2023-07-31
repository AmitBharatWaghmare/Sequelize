const Sequelize =require(`sequelize`);
const sequelize= new Sequelize(`task`,`root`,`@mIT1995`,{
    dialect:`mysql`,
    host:`localhost`
});
module.export=sequelize;