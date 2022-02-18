let fs=require("fs");
let path=require("path");
function helpFn(){
    console.log(`
        List of all commands:
            node main.js tree "DirectoryPath"
            node main.js organize "DirectoryPath"
            node main.js help 
    `);
}

module.exports = {
    helpFn:helpFn
}