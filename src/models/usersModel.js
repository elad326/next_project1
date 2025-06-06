import mongoose from "@/lib/db"; // הקובץ של החיבור

// הגדרת הסכמה
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Zא-ת\s]{2,}$/.test(v);
      },
    },
    required: [true, "full name is required"],
  },
  tel: {
    type: String,
    validate: {
      validator: function (v) {
        return /^05[0-9]-?[0-9]{7}$/.test(v);
      },
    },
    required: [true, "Phone number name is required"],
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(v);
      },
    },
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^(?=.*[A-Za-z])[A-Za-z0-9]+$/.test(v);
      },
    },
    required: true,
  },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// יצירת מודל או שימוש במודל קיים
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
