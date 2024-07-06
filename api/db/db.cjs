const Sequelize = require('sequelize')
const sequelize = new Sequelize('employee','root','L.0987654321',{
    host:'127.0.0.1',
    dialect:'mysql',
    define : {
        timestamps:false
    }
})

try{
    sequelize.authenticate()
    console.log('Conectado :)')
} catch(err){
    console.log(`Falha na conecção...${err}`)
}

const Employees = sequelize.define(
    'employee',
    {
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        salary:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        role:{
            type:Sequelize.STRING,
            allowNull:false

        },

        contract:{
            type:Sequelize.STRING,
            allowNull:true
        }
    }
)

//Employees.sync({force:true})

//Employees.create({name:'Renato Gaúcho',salary:3200,role:'Junior',contract:'05/06/2022'}).then(console.log('Employee added sucessfully!'))




module.exports = {
    sequelize,
    Employees

}

