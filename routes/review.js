const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn,isreviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


//Review Route.
router.post("/", 
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));
    
    //Delete Review Route
    router.delete("/:reviewId",
        isLoggedIn,
        isreviewAuthor,
        wrapAsync(reviewController.deleteReview));
    
    module.exports=router;