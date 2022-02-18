let fs=require("fs");
let path=require("path");
function treeFn(dirPath){
    if(dirPath==undefined){
        helperTree(process.cwd()," ");
        return;
    }
    if(fs.existsSync(dirPath)==true){
        helperTree(dirPath," ");
    }
    else{
        console.log("Please enter a valid path");
    }
}

function helperTree(dirPath,indent){
    let flag=fs.lstatSync(dirPath).isFile();

    if(flag==true){
        let fileName=path.basename(dirPath);
        console.log(path.basename(indent+"|->"+fileName));
    }
    else{
        let child=fs.readdirSync(dirPath);
        console.log(indent+"->"+path.basename(dirPath));

        for(let i=0;i<child.length;i++){
            let childAddress=path.join(dirPath,child[i]);
            helperTree(childAddress,indent+"\t");   
        }
    }
}

module.exports= {
    treeFn:treeFn
}