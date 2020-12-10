const express = require("express");
const booksRouter = express.Router();

function router(nav){
    var books =[
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.jpg"
        },
        {
            title: 'Harry potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "hp.jpg"
        },
        {
            title: 'Pathummede Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: "aadu.jpg"
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: 'Douglas Adams',
            genre: 'Science Fiction',
            img: "hgg.jpg"
        },
        {
            title: "The Da Vinci Code",
            author: 'Dan Brown',
            genre: 'Mystery',
            img: "Davinci.jpg"
        },
        {
            title: "The Lord of the Rings",
            author: 'J R R Tolkien',
            genre: 'Fantasy',
            img: "lor.jpg"
        },

    ]
    
    booksRouter.get("/", function(req,res){
        
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
        
    });
    
    booksRouter.get("/:id", function(req,res){
    
        const id = req.params.id
        res.render('book', {
            nav,
            title:'Library',
            book: books[id]
        })
    });

    return booksRouter;
}


module.exports = router;