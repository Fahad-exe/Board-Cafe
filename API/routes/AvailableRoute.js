import express from "express";
import Day from "../models/Day.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", (req, res, next) => {
    console.log("request attempted");
    console.log(req.body);

    const dateTime = new Date(req.body.date);
    Day.find({ date: dateTime }, (err, docs) => {
        if (!err) {
            if (docs.length > 0) {
                console.log("Record exist. Sent doc");
                res.status(200).send(doc[0]);
            } else {
                const allTables = require("../data/allTables");
                const day = new Day({
                    date: dateTime,
                    tables: allTables
                });
                day.save(err => {
                    if (err) {
                        res.status(400).send("Error saving new data");
                    } else {
                        console.log("Created new datetime. here are defaults document");
                        Day.find({ date: dateTime }, (err, docs) => {
                            err ? res.sendStatus(400) : res.status(200).send(docs[0]);
                        });
                    }
                });
            }
        } else {
            res.status(400).send("Could no search for a day")
        }
    });
});



export default router