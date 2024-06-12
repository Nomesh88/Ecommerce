const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/marketplace", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
