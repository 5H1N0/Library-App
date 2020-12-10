const express = require("express");
const booksRouter = express.Router();

function router(nav){
    
    booksRouter.get("/", function(req,res){
        
        res.render("addauthors",
        {
            nav,
            title:'Add Author'
        });
        
    });

    return booksRouter;
}


module.exports = router;