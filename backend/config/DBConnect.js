import mongoose from "mongoose";

export default function ConnectDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('✅ Database is connected');
        })
        .catch((error) => {
            console.error('❌ DB Connection Error:', error.message);
        });
}
