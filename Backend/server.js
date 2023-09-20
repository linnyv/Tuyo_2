require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');

const ChartRoute = require('./routes/ChartRoute');
const CornellRoute = require ('./routes/CornellRoute');
const GPARoute = require ('./routes/GPARoute');
const GradeRoute = require ('./routes/GradeRoute');
const MapRoute = require ('./routes/MapRoute');
const OutlineRoute = require('./routes/OutlineRoute');
const SentenceRoute = require ('./routes/SentenceRoute');
const TestDataRoute = require ('./routes/TestDataRoute');
const UserRoute = require ('./routes/UserRoute');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB has been sucessfully connected')
})
.catch((error) => {
    console.log(error)
});

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
});

app.use(
    cors({
      origin: ['${PORT}'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.use('/fonts', express.static(path.join(__dirname, 'frontend', 'src', 'component', 'fonts')));
  
app.use('/api/chartnotas', ChartRoute);
app.use('/api/cornellnotas', CornellRoute);
app.use('/api/gpatrackers', GPARoute);
app.use('/api/gradetrackers',GradeRoute);
app.use('/api/map-notas', MapRoute);
app.use('/api/outline-notas', OutlineRoute);
app.use('/api/sentence-notas', SentenceRoute);
app.use('/api/test-trackers', TestDataRoute);
app.use('/api/login', UserRoute);
app.use('/api/signUp', UserRoute)
