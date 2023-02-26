const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb+srv://Manikanta:Manikanta@cluster0.sptxrlw.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));
};

module.exports = connect;
