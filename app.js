const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine' ,'ejs');
const indexRouter = require('./routs/indexRouts')

//listening for req
app.listen(3007);

// static file
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret: "key",
    cookie:{"key":"secret",maxAge: 5 * 60 * 1000}
}));

app.use( function(req,res,next){
     res.set('cache-control','no-cache , no-store,must-revalidate,max-stale=0,post-check=0,pre-checked=0');
     next();
   });
  

        // 404 page

app.use(indexRouter);

app.use((req ,res) =>{
    console.log('not found !!')
    res.status(404).render('404',{title:'404 Notfound'});
})