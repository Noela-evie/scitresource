const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: '123',
    port: 5432,
});

client.connect();

app.use(bodyParser.json());

app.post('index.html', async (req, res) => {
    const { userId, password } = req.body;
    try {
        const result = await client.query('SELECT * FROM users WHERE userid = $1 AND password = $2', [userId, password]);
        if (result.rows.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.post('signup.html', async (req, res) => {
    const { userId, password } = req.body;
    try {
        await client.query('INSERT INTO users (userid, password) VALUES ($1, $2)', [userId, password]);
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
