const express = require('express');
const axios = require('axios');

const app = express();
const token = process.env.TOKEN
const name = 'michaelbourlotos'

//seperate queries for each repository 
app.get('/hyperion', (req, res) => {
    axios.get('https://api.github.com/repos/unither/hyperion/issues', {
        params: {
            state: 'closed',
            assignee: name
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        const issues = response.data;
        res.json(issues);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: "Something happend"});
    });
});

app.get('/ariel', (req, res) => {
    axios.get('https://api.github.com/repos/unither/ariel/issues', {
        params: {
            state: 'closed',
            assignee: name
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        const issues = response.data;
        res.json(issues);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: "Something happend"});
    });
});

app.get('/titan', (req, res) => {
    axios.get('https://api.github.com/repos/unither/flasktitan/issues', {
        params: {
            state: 'closed',
            assignee: name
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        const issues = response.data;
        res.json(issues);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: "Something happend"});
    });
});








app.listen(3001, function(){
    console.log('server has started on port 3001');
});
