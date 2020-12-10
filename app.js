const express = require("express");
const app = new express();
const nav1 = [
    {
        link : '/signin', name : 'Signin'
    },
    {
        link : '/signup', name : 'Signup'
    }
]
const nav = [
    {
        link:'/books',name: 'Books'
    },
     {
         link:'/authors', name: 'Authors'
    },
    {
        link:'/addbooks', name: 'Add Books'
    },
    {
        link:'/addauthors', name: 'Add Authors'
    },
    {
        link: '/', name : 'Logout'
    }

    ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRouter')(nav);
const addbookRouter = require('./src/routes/addbookRouter')(nav);
const addauthorRouter = require('./src/routes/addauthorRouter')(nav);



app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/addbooks', addbookRouter);
app.use('/addauthors', addauthorRouter);



app.get("/", function(req,res){
    
    res.render("index",
    {
        nav1,
        title:'Welcome To Library'
    });
    
});

app.get("/signin", function(req,res){
    
    res.render("signin",
    {
        nav1,
        title:'SignIn'
    });
    
});

app.get("/signup", function(req,res){
    
    res.render("signup",
    {
        nav1,
        title:'SignUp'
    });
    
});

app.get("/home", function(req,res){
    
    res.render("home",
    {
        nav,
        title:'Library Home'
    });
    
});




app.listen(5000);

