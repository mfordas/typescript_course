import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/login';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => console.log(`Listening on port 3000`));
