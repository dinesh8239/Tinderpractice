const express = require('express')
const app = express()

app.use("/pest", (req, res) => {
    res.send('mere mehaboob')
})

app.use("/test", (req, res) => {
    res.send('All is well')
})

app.use("/", (req, res) => {
    res.send('Data successfully get')
})


app.listen(5000); 