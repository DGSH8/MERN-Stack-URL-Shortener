const express = require('express');
const redirect = require('./controllers/redirects.controller');
const url = require('./controllers/url.controller');
const EmployeeModel = require('./models/Employee')
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ Message: 'Hi there' });
});

app.use('/', redirect);
app.use('/api/url', url);

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            }
            else {
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})


module.exports = app;