
import mongoose from "mongoose";
import Table from "../models/Table";

const fs = require("fs");

let tabledata = fs.readFileSync(__dirname + "/allTables.json")
tabledata =JSON.parse(tabledata).tables;

let allTables = [];
tabledata.forEach(table =>{
    allTables.push(new Table(table));
});