var express = require('express');
var app = express();
const http1 = require('http');
const http = http1.Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use('/build',express.static('build'));
app.use('/images',express.static('images'));
app.use('/pixi',express.static('pixi'));
app.use('/scripts',express.static('scripts'));
app.use('/sounds',express.static('sounds'));
app.use('/texturePackerFiles',express.static('texturePackerFiles'));

/*app.get('/', (req, res) => {
  console.log(`serving req: `,req);
  res.sendFile(__dirname + '/index.html');
});*/
const phpProxy = function(oreq, ores) {
	console.log(`proxy to `+oreq.url);
	
    //let serverURL = '82.181.24.9:81'; // raspberry
	const options = {
    // host to forward to
    //host: 'localhost',
    host: '82.181.24.9',
    // port to forward to
    //port: 80,
    port: 81,
    // path to forward to
    path: oreq.url,
    // request method
    method: 'GET',
    // headers to send
    headers: oreq.headers,
  };

  const creq = http1
    .request(options, pres => {
      // set encoding
      pres.setEncoding('utf8');

      // set http status code based on proxied response
      ores.writeHead(pres.statusCode);

      // wait for data
      pres.on('data', chunk => {
        ores.write(chunk);
      });

      pres.on('close', () => {
        // closed, let's end client request as well
        ores.end();
      });

      pres.on('end', () => {
        // finished, let's finish client request as well
        ores.end();
      });
    })
    .on('error', e => {
      // we got an error
      console.log('proxy error');
      console.log(e.message);
      try {
        // attempt to set error message and http status
        ores.writeHead(500);
        ores.write(e.message);
      } catch (e) {
        // ignore
      }
      ores.end();
    });

  creq.end();
};
app.get('/HairyFairy/login.php',phpProxy);
app.get('/HairyFairy/listGames.php',phpProxy);
app.get('/HairyFairy/newGame.php',phpProxy);
app.get('/HairyFairy/joinGame.php',phpProxy);
app.get('/HairyFairy/callGameMaster.php',phpProxy);
app.get('/HairyFairy/leaveGame.php',phpProxy);
app.get('/HairyFairy/gameRecap.php',phpProxy);
app.get('/HairyFairy/doGameAction.php',phpProxy);

app.get('/index.html', (req, res) => {
  //console.log(`serving req: `,req);
  res.sendFile(__dirname + '/index.html');
});
app.get('/chooseUsername.html', (req, res) => {
  //console.log(`serving req: `,req);
  res.sendFile(__dirname + '/chooseUsername.html');
});
app.get('/resetLocalStorage.html', (req, res) => {
  //console.log(`serving req: `,req);
  res.sendFile(__dirname + '/resetLocalStorage.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

