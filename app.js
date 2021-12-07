const http=require('http');
const fs= require('fs');
const express = require('express')
const app = express()
const port = 3000
app.use('/assets', express.static('assets'))

app.use('/css', express.static(__dirname = 'asstes/css'))
app.use('/js', express.static(__dirname = 'asstes/js'))
app.use('/fonts', express.static(__dirname = 'asstes/fonts'))
app.use('/img', express.static(__dirname = 'asstes/img'))
app.use('/vendors', express.static(__dirname = 'asstes/vendors'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/home' || req.url === '/') {
        let data = fs.readFileSync('html/index1.html');
        res.write(data);
    } else if (req.url == '/bootstrap.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/bootstrap.css'));
        res.end();
    } 
    else if (req.url == '/maicons.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/maicons.css'));
        res.end();
    }
    else if (req.url == '/minibar.virtual.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/minibar.virtual.css'));
        res.end();
    }
    else if (req.url == '/themify-icons.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/themify-icons.css'));
        res.end();
    }
    else if (req.url == '/topbar.virtual.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/topbar.virtual.css'));
        res.end();
    }
    else if (req.url == '/topbar.virtual.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('assests/css/topbar.virtual.css'));
        res.end();
    }
 
    res.end();

}).listen(8080, ()=> {console.log('Server Started at Port 8080')});