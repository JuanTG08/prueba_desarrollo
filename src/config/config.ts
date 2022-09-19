import { config } from 'dotenv';
import IEnv from '../interface/IEnv';
config();
const env: IEnv = {
    PORT_SERVER : process.env.PORT_SERVER || 8000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/lansanet",
    SECRET_SERVER: process.env.SECRET_SERVER || "carros"
}
export default env;