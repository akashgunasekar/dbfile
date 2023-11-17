exports.index = (req,res)=>{
    res.render('index')
}

const axios = require('axios');

exports.thankyou=(req,res)=>{
    axios.get('http://localhost:10000/api/users').then(function (myresponse) {
        console.log(myresponse);
        res.render('thankyou',{users:myresponse.data})

    })


}

