const dotenv=require('dotenv') 


if(process.env.NODE_ENV==="production")
{
    dotenv.config({
        path:'.env.production'
    })
}else{
    dotenv.config({
        path:'.env.development'
    })
}


module.exports = {
    api: {
        // port: process.env.PORT ? process.env.PORT : 3000,
        port: process.env.PORT || 9000,
        host: process.env.HOST || 'http://localhost:9000/'
     },
    db: {
        dbConnectionString:procces.env.DATABASE_URL
        // host: process.env.DB_HOST ,
        // user: process.env.DB_USER,
        // pass:  process.env.DB_PASSWORD,
        // name: process.env.DB_NAME,
        // port:process.env.DB_PORT,
       
    }
}



