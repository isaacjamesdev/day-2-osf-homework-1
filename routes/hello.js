module.exports = function(app){
    var api = app.api;
    
    /*
    * gonna be render to file 'home', in directory 'views'
    * seted on main file: 'helloNode.js'
    * 'item' is as a property of 'home'.
    * this 'item' was initiated on json bellow
    */
    app.get('/', api.home);
    
    app.get('/funcao',api.func);
    
    app.get('/squared/:id', api.squared);
    
    function funcao(req,res){
        res.send("I'm here, and I came from a function");
    }
}