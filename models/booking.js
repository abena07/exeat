const mongoose =require('mongoose')



const bookingSchema=new mongoose.Schema({
    
    ///id
    goingDate:{
        
        type: Date,
        required: true,
        

    },

    returnDate:{
        type:Date,
        required:true,

    },

    reason:{
        type:String,
        required:true,

    },

    confirmed:{
        type:Date

    },

    actualReturnDate:{
        type:Date
    }

})
module.exports=mongoose.model("Booking",bookingSchema)
