import express from 'express';
import listUsersController from './src/controllers/list-users-controller.js';
import helloWorldController from './src/controllers/hello-world-controller.js';
import { Sequelize } from 'sequelize';

const app = express();

const dbSequelize = new Sequelize(
    'ead_fs_12',
    'root',
    '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)



app.get('/', helloWorldController);
app.get('/users', listUsersController);

app.listen(8081, async (error) => {
    await dbSequelize.authenticate();

    const users = await dbSequelize.query('SELECT * FROM `users`');
    console.log(users[0]);

    console.log("Aplicação está funcionando");
});
