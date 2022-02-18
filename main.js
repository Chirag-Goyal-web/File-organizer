#!/usr/bin/env node
let fs=require("fs");
let path=require("path");
let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize");

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let dirPath=inputArr[1];

switch (command) {
    case "tree":
        treeObj.treeFn(dirPath);
        break;

    case "organize":
        organizeObj.organizeFn(dirPath);
        break;

    case "help":
        helpObj.helpFn();
        break;

    default:
        console.log("Please enter a valid command");
        break;
}
