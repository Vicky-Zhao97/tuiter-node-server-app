/*
const express = require('express')
const app = express()
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000)*/

/*
const express = require('express')
const app = express()
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000)
*/

/*import express from 'express';
const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);*/

/*import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
const app = express()
HelloController(app)
app.listen(4000)*/

/*import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
const app = express()
HelloController(app)
UserController(app)
app.listen(4000)*/

/*import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(4000);*/

import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);



