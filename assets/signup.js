$(function () {

    $(".createAccountBtn").click(async function (e) {
        e.preventDefault();
        const userName = $("#userName").val();
        const teamName = $("#teamName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        const city = $("#city").val();
        const zipCode = $("#zipCode").val();
        const age = $("#age").val();
        const favoriteTeam = $("#favoriteTeam").val();
        const additionalInfo = $("#additionalInfo").val();
        if (userName == "" && teamName == "" && email == "" && password == "" && confirmPassword == ""
            && city == "" && zipCode == "" && age == "" && favoriteTeam == "" && additionalInfo == "") {
            alert("Enter all fields")
            console.log("user must enter all fields")
            // return
        } else {
            const signUpFormData = ({
                    "salt": "",
                    "password": password,
                    "userData" : {
                "sessionToken": "",
                "userName": userName,
                "teamName": teamName,
                "email": email,
                // "password" : password,
                "city": city,
                "zipCode": zipCode,
                "age": age,
                "favoriteTeam": favoriteTeam,
                "additionalInfo": additionalInfo
                // "date" : date
                    }
            })
            console.log(signUpFormData)
            await axios.post(`https://fantasyapp-4012.herokuapp.com/routes/createAccount`, signUpFormData, {
                "method": "POST"
            })
                .then(async function(result){
                    console.log(result , " i am result, give me session token")
                    const idk = await result.data
                    console.log(idk)
                    localStorage.setItem('sessionToken' , idk.sessionToken )
                })
                .then(function(){
                    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
                })
        }
    }
    )














})