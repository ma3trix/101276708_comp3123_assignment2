const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./src/routes/employeeRoutes');

const app = express();
const PORT = 8089;

mongoose.connect('mongodb://mongo:27017/Assignment2DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
