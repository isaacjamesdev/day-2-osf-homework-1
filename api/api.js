// here, the functions will assign to properties
var api = {};

api.home = (req,res)=>{
    res.render('home',{
        item: "Lorem Ipsum"
    });
}

api.squared = (req,res)=>{
    res.send(Math.pow(req.params.id,2).toString());
}

api.func = (req,res)=>{
    res.sendStatus(200);
}

module.exports = api;