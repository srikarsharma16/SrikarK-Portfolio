const fs= require('fs');

fs.readFile('file.txt', (err, data)=> {
    if(err==null){
        console.log(data.toString());
    } else{
        console.log(err.message);
    }

});