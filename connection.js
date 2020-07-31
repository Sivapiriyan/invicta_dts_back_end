const mongoose = require('mongoose'); 
const uri = "mongodb+srv://lavanjan:lavan1998@invicta-dts.euh5l.mongodb.net/invicta-dts?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true,useFindAndModify: false});

module.exports = mongoose.connection; 