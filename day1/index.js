var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 3008;

var server = http.createServer( (request, response) => {

    /*
    // Show html
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('index.html', (err, data) => {
        if(err) 
            throw err;
        console.log('operation success');
        response.end(data);
    })
    */

    /*
    // Show json
    response.writeHead(200, {"Content-Type": "application/json"});
    let json = {
        'fullname': 'Omer Farooq',
        'age': 31,
        'isMarried': true
    }
    response.end( JSON.stringify(json) );
    */

    /*
    // Show Pdf
    response.writeHead(200, {"Content-Type": "application/pdf"});
    fs.readFile('sample.pdf', (error,data) => {
        if(error){
            response.json({'status': 'error', 'message': error})
        } else {
            response.write(data);
            response.end();
        }
    })
    */

    /*
    // Play mp3
    response.writeHead(200, {"Content-Type": "audio/mp3"})
    fs.exists('sample.mp3', function(exists){
        if(exists){
            var rstream = fs.createReadStream('sample.mp3');
            rstream.pipe(response);
        } else {
            response.end('No file found');
        }
    })
    */


    // Play video
    response.writeHead(200, {"Content-Type": "audio/mp3"})
    fs.exists('sample.mp3', function(exists){
        if(exists){
            var rstream = fs.createReadStream('sample.mp4');
            rstream.pipe(response);
        } else {
            response.end('No file found');
        }
    })
    

});

server.listen(port, host, (error) => {
    if(error) {
        return console.log('Error Occured: ' + error);
    }

    console.log('Server is listening to host: ' + host + ' port: ' + port );
});