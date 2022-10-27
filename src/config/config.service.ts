
import {config} from "dotenv";

config();


export default () => ({
    app: {
        origin: process.env.ORIGIN,
        port: process.env.PORT,
    },

    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },

    development: process.env.NODE_ENV === 'development',

    httpsOptions:undefined,
    jwtSecret: process.env.JWT_SECRET,
    service: process.env.SERVICE,
});
