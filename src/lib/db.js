import mongoose from 'mongoose';

const uri = process.env.DB_CONN;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// בדוק אם יש חיבור פעיל כבר
if (mongoose.connection.readyState !== 1) {
  mongoose.connect(uri, options)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

export default mongoose;
