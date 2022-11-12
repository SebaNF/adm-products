const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use( express.json() );

app.use(express.urlencoded({ extended:true }));

app.use(cors());

require('./server/config/moongose.confing');

const admRoutes = require('./server/routes/adm.routes');

admRoutes(app);

app.listen( port, () => console.log('Servidor inicidado puerto: ', port));