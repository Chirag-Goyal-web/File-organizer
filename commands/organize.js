let fs=require("fs");
let path=require("path");

let types={
    media:["mp4","mkv"],
    archives:["zip","7z","rar","tar"],
    documents:["doc","docx","docs","pdf","xlsx","xls","odt","ods","odp"],
    app:["exe","dmg","pkg","deb"]
}

function organizeFn(dirPath){
    if(dirPath==undefined){
        organizeHelper(process.cwd()," ");
        return;
    }
    if(fs.existsSync(dirPath)==true){
        let destPath=path.join(dirPath,"organized_files");

        if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath);
        }
        organizeHelper(dirPath,destPath);
    }
    else{
        console.log("Please enter a valid path");
    }
}

function organizeHelper(dirPath,destPath){
    let childFile=fs.readdirSync(dirPath);

    for(let i=0;i<childFile.length;i++){
        if(fs.lstatSync(path.join(dirPath,childFile[i])).isFile()==true){
            let category=getCategory(childFile[i]);
            sendFiles(path.join(dirPath,childFile[i]),destPath,category);
        }
    }
}

function sendFiles(srcFilePath,destPath,category){
    let categoryPath=path.join(destPath,category);

    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }

    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
}

function getCategory(fileName){
    let ext=path.extname(fileName).slice(1);

    for(let key in types){
        let arr=types[key];

        for(let i=0;i<arr.length;i++){
            if(arr[i]==ext){
                return key;
            }
        }
    }

    return "other";
}

module.exports= {
    organizeFn:organizeFn
}