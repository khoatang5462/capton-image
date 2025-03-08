import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv()
 export  const connect = new Sequelize(
    
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    process.env.DB_DATABASE,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect: 'mysql'
    }

 )