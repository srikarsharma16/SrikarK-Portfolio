const fs=require('fs')

let d=fs.readFileSync('a.txt');

fs.writeFileSync('a.txt', d.toString() + 'hello welcome', (err)=>{
    if(err===null) {
        console.log('Successfully Write Data!');
    } else {
        console.log(err.message);
    }
});