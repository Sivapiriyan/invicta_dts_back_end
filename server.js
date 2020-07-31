const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./connection')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

connection.once('open', ()=>{
    console.log("MongoDB database connection Success");
})

const defectsRouter = require('./routes/defects');
const employeesRouter = require('./routes/employees');
const projectsRouter = require('./routes/projects');


app.use('/defects',defectsRouter);
app.use('/employees', employeesRouter);
app.use('/projects', projectsRouter);


app.listen(port, ()=> {
    console.log(`server is runnign on : ${port}`);
});


