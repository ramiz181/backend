const express = require('express');
const blog = require('./routes/blog')
const app = express();
const PORT = 4000;

app.get('/menu', (req, res) => {
    res.send('Here is our restaurant menu...<a href="http://localhost:4000/order">Click me</a>')
})
app.get('/order', (req, res) => {
    res.send('Your purchase is on the way...<a href="http://localhost:4000/invoice">Click me</a>')
})
app.get('/invoice', (req, res) => {
    res.send('Invoice generated...<a href="http://localhost:4000/menu">Click me</a>')
})

app.use('/blog', blog)


app.listen(PORT, () => console.log('Server runnig'));