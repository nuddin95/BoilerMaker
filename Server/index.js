const express =require('express') ;
const volleyball =require('volleyball') ;
const bodyParser =require('body-parser') ;
const path = require('path')

const app = express();

app.use(volleyball);

//RENDER THE STATIC FILES IN PUBLIC FOLDER
app.use(express.static(path.join(__dirname, './../Public')));

//MAKES THE REQUEST BODY INTO JSON OBJECT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//FOR EVERY REQUEST, IT SENDS IT TO ROUTES FOLDER
app.use('/api', require('./Routes'))

//SERVES UP INDEX.HTML IN CASE OF REQUEST PATH IS NOT FOUND
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './../Public'));
})

//FINAL ERROR HANDLER FOR WHEN SERVER BREAKS ERROR:500!!!
app.use((err, req, res, next)=>{
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error')
})

//CODE TO START THE SERVER
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
	console.log(`Server is running on Port: ${port}`);
})
