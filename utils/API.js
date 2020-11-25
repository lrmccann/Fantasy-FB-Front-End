import axios from "axios";



export default{
    getUser : async function(data) {
        console.log("getUser" , data)
        return await axios.get(
            "https://fantasyapp-4012.herokuapp.com/hello"
        );
    }
}