// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


let filename="script.html";

function extension(file1){
    let x = file1.lastIndexOf('.');
    let ans=file1.split(file1[x]);
    console.log("Extension of input file is : " + ans[ans.length-1]);
}

extension(filename);