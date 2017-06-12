/**
 * Created by Yahya on 12/06/2017.
 */

var middleware={
    requireAuthentication:function (req,res,next) {
        console.log('private route ! ');
        next();},
    logger:function (req,res,next) {
        console.log(req.method);
        next();
    }
};
module.exports=middleware;