
var arr=[{
    img:"watch series main-5.png",
    name:"WATCH Series 7",
    disc:"Its out largest display yet."
},{
    img:"last2.png",
    name:"MacBook Air",
    disc:"Supercharged by M2."
},{
    img:"ipad-pro-2.jpg",
    name:"iPad Air",
    disc:"Light.Bright.Full of might."
},
{
    img:"random-4.jpg",
    name:"MacBook Pro 13",
    disc:"Supercharged by M2."
},
]

const reqforHome = (req ,res) =>{
    console.log("req for login to home page");
    if(req.session.loggedIn){
        console.log("req success"); 
     res.render('home',{title:'Home',user:a, arr})
     }else{
        console.log("req rejected"); 
        res.render('login' ,{title:'Login'})
    }

};

const checkingforLogin =(req ,res)=>{

    console.log('validating');

    if(req.body.email==""||req.body.pass==""){

        console.log('input box empty');
        res.render('login',{pass:'Input box cannot be empty',title:'Login'})

    }else if (req.body.email=="shafi@gmail.com") {

        if(req.body.pass=="1234"){
            console.log('validation success');
            req.session.loggedIn=true;  
            a=req.body.email;
            res.render('home',{title:'Home',user:a,arr})

        }else{
            console.log('password incorrect')
            res.render('login',{pass:'Please check your password',title:'Login'})
        };
    }else{
        console.log('email incorrect')
        res.render('login',{email:'Please check your email',title:'Login'})
    };

};

const logout = (req ,res) => {

    console.log('session deleted','loggedout');
    req.session.destroy();
    
    res.render('login',{title:'Login'})
    };

module.exports = {
    checkingforLogin,
    reqforHome,
    logout
}