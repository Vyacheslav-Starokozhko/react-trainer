import { Router } from 'express';
import { Pool } from 'pg';

const router = Router();

const routes = (pool: Pool) => {
    router.get('/', async (req, res) => {
        try {
            const { rows } = await pool.query('SELECT NOW()');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error in fetching data');
        }
    });

    return router;
};

export default routes;
