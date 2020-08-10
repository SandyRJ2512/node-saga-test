const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const userListMethods = require('./controller');

app.get('/userlist', userListMethods.getUsersList);

app.listen(5000);