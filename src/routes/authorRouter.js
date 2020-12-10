const express = require("express");
const booksRouter = express.Router();

function router(nav){
    var authors =[
        {
            author: 'Vaikom Muhammad Basheer',
            genre: 'Drama',
            img: "Basheer.jpg"
        },
        {
            author: 'Dan Brown',
            genre: 'Mystery',
            img: "dan.jpg"
        },
        {
            author: 'Douglas Adams',
            genre: 'Fiction',
            img: "douglas.jpg"
        },
        {
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "jk.jpg"
        },
        {
            author: 'J R R Tolkien',
            genre: 'Fantasy',
            img: "tolkien.jpg"
        }

    ]
    
    booksRouter.get("/", function(req,res){
        
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
        
    });
    
    booksRouter.get("/:id", function(req,res){
    
        const id = req.params.id
        res.render('author', {
            nav,
            title:'Author',
            author: authors[id]
        })
    });

    return booksRouter;
}


module.exports = router;