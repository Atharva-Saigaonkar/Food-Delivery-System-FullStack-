import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://asaigaonkar556_db_user:GreatStack@cluster0.erzt73e.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}