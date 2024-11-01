const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/WanderLust";


main()
.then((res)=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log("Some error occurred in db");
});

async function main(){
    await mongoose.connect(MONGO_URL);
};

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"671f912e3316f5a6bfbaabaa"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();
