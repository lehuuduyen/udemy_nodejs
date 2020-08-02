const express = require('express');
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')

const app = express();
app.use(bodyParser.json());

const posts = {}

app.get('/posts',(req,res) =>{
	res.send(posts)
});

app.post('/posts',(req,res) =>{
	const id = randomBytes(4).toString('hex')
	//random string
	const { title1 } =req.body;
	posts[id] = {
		id,title1
	};
	res.status(201).send(posts[id])
});

app.listen(4000,() =>{
	console.log('listening on 4000')
})