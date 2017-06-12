/**
 * Created by Yahya on 10/06/2017.
 */
var express=require('express');
var app=express();
var middleware=require('./middleware');
app.use(middleware.logger);
app.get('/',function (req,res) {
   res.send('hello express');

});
app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('about express');

});
app.use(express.static(__dirname+'/public'));
app.listen(3000,function () {
    console.log("express server started !! ");
});