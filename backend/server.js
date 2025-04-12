const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/pinterest-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes); // ✅ This connects the route


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
