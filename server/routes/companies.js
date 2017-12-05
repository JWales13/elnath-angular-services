var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        }
        else {
            client.query('SELECT * FROM company', function (err, result) {
                if (err) {
                    console.log('error', err)
                    res.sendStatus(500);
                }
                else {
                    res.send(result.rows);
                }
            })
        }
    })
});

router.post('/', function (req, res) {
    // var newCompany = req.body;
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error connecting to DB', errorConnectingToDatabase);
            res.sendStatus(500);
        }
        else {

            client.query(`INSERT INTO company (name, country)
            VALUES ($1, $2);`, [req.body.name, req.body.country], function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('error making query', errorMakingQuery);
                        res.sendStatus(500);
                    }
                    else {
                        res.sendStatus(201);
                    }//end  query else
                });//end client query
        }//end connect else
    });//end pool connect
})//end app post


module.exports = router;