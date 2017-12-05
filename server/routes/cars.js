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
            client.query('SELECT * FROM "cars" JOIN "company" ON "company"."id" = "cars"."company_id";', function (err, result) {
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
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error connecting to DB', errorConnectingToDatabase);
            res.sendStatus(500);
        }
        else {

            client.query(`INSERT INTO cars (year, model, nickname, company_id)
            VALUES ($1, $2, $3, $4);`, [req.body.year, req.body.model, req.body.nickname, req.body.company_id], function (errorMakingQuery, result) {
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