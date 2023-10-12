const express = require('express')
const routes = require( './routes')
const mongoConnect = require('./config/mongoConnect')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')
const app = express()
const port = 5000

// required middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('images'))
app.use(fileUpload())

//❤️ mongodb connection 
mongoConnect()

// for initial testing
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Connect with all routes
routes(app)

app.use('*', (req, res) => {
    console.log(404);
    res.status(404).json('Not found!')
})

app.listen(port, () => {
    console.log(`🚀 Server listening on port ${port}`)
})