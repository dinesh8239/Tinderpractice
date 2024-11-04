const express = require('express')
const app = express()

app.use('/test',(req, res, next) => {

    console.log('your api is working 1');
    // res.send('Router handler 1')
    next()
},
[(req, res, next) =>{
    console.log('your api is working 2');
    // res.send('Router handler 2')
    next()
},
(req, res, next) => {
console.log('your api is working 3');
// res.send('Router handler 3')
next()
},

(req, res, next) => {
    console.log('your api is working 4');
    res.send('Router handler 4')
    next()
}],

(req, res, next) => {
console.log('your api is working 5');
// res.send('Router handler 5')
// next()
}
)

app.listen(5000, () => {
    console.log('server is running at port 5000');
    
}); 