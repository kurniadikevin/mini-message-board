var express = require('express');
const messages = require('./index.js');
var router = express.Router();

let data = messages.obj;
console.log(data);


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form',);
  });

router.post('/' ,async function(req,res){
 
  data.push({
    text : await req.body.textInput,
    user : await req.body.authorInput,
    added : new Date()
  })
  

  res.redirect('/') 
})
console.log(data);

module.exports = router;
//module.exports.data = data;