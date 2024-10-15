import express from 'express';
import { Pool } from 'pg';
import routes from './routes';

const app = express();
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

app.use(express.json());
app.use('/api', routes(pool));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
