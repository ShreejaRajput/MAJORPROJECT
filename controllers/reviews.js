const Listing=require("../models/listing");
const Review=require("../models/review");




module.exports.createReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.reviews);
    //this will access the review[rating] and review[commentts] we mwntioned in the show.ejs form
    newReview.author=req.user._id;
    
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    req.flash("success","New Review Created!");
    console.log("new review saved");
    res.redirect(`/listings/${listing._id}`);
    };


    module.exports.deleteReview=async(req,res,next)=>{
        let{id,reviewId}=req.params;
        //We also have to delete the review from the listing array hence we use $pull.
        await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted");
        res.redirect(`/listings/${id}`);
        };