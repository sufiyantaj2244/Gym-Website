
import mongoose from "mongoose"
const Connections = async() =>{
    const URL = 'mongodb://127.0.0.1:27017/Registration'
    try{
       await mongoose.connect(URL)
       console.log('Connected to Database')
    }catch(e){
        console.log("Couldn't connect to Database",e)
    }
}

export default Connections
