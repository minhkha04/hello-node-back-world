// npm init
// npm install express
// npm i joi
// npm install cors
// npm i joi-to-swagger swagger-ui-express
import express from 'express';
import cors from 'cors';
import rootRouter from './routers/rootRouter.js';
import swaggerDocument from './swagger/index.js';
import swaggerUi from 'swagger-ui-express';
import { connectDB, closeDB } from './config/mongodb.js';
import existHook from 'async-exit-hook'
import 'dotenv/config';
import { env } from './config/environtment.js';

const PREFIX = env.PREFIX;
const PORT = env.PORT;
const PREFIX_SWAGGER = env.PREFIX_SWAGGER;

const app = express();
await connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static('.'))

app.use(PREFIX, rootRouter);
app.use(PREFIX_SWAGGER, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
console.log(`📖 Swagger UI is available at ${PREFIX_SWAGGER}`);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
});

existHook(() => {
    console.log("🔒 Đóng kết nối MongoDB ...");
    closeDB();
});
