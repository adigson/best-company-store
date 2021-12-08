const {MongoClient} = require('mongodb');
//use(require(cors));//
// app.use(require('body-parser').json());//
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
 const uri = "mongodb+srv://bwuser01:mb4E-COMMERCE@<your-cluster-url>/test?retryWrites=true&w=majority";