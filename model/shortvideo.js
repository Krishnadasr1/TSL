require('dotenv').config();
const { database } = require('firebase-admin');
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    logging: false,
});

const shortVideo = sequelize.define('shortvideo', {
   
    shortVideo_heading:{
        type: DataTypes.STRING,
       
    },
    shortVideoLink: { 
        type: DataTypes.STRING, 
        
    },
    language: { 
        type: DataTypes.STRING, 
        
    },
   
   
}, {
    timestamps: false,
});

shortVideo.sync({ alter: true })
    .then(() => {
        console.log("Short Video table created");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = shortVideo;