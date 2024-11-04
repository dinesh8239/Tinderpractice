const express = require('express')
const app = express()

app.get('/test',(req, res) => {
    res.send('data keep successfully in db')
})

app.post('/test', (req, res) => {
res.send('data get successfully')
})

app.delete('/test',(req, res) => {
    res.send('deleted successfully')
})

app.listen(5000, () => {
    console.log('server is running at port 5000');
    
}); 