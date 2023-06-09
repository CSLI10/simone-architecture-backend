const mongoose = require('mongoose');
// const url = 'mongodb+srv://admin:Jackandsam1@cluster0.39no3vc.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    let db = null;

    try {
        await mongoose.connect(process.env.DB_ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected successfully to db");
        db = mongoose.connection;
    }
    catch(error) {
        console.log(error);
    }
    finally {
        if(db !== null && db.readyState === 1) {
            // await db.close();
            // console.log("Disconnected successfully from db");
        }
    }
};

module.exports = connect;