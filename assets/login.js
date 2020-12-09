$(function () {

    // const openLoginModal = async () => {
    //     getButton = document.getElementById('loginBtn').onclick(function(){

    //     })
    // }

    $("#loginBtn").click(function(){
        $('#loginModal').css('visibility', "visible")
        // var getModal = document.getElementById('loginModal')
        // getModal.removeAttribute("hidden")
        console.log("hello")
    })

    $("#closeModalBtn").click(function(){
        $("#loginModal").css('visibility' , "hidden")
        console.log("goodbye")
    })

    $('#loginFromModalBtn').click(async function(){
        var userName = $('#usernameInput').val();
        var password = $('#passwordInput').val();
        if(userName == ""){
            alert("please enter a user name")
            return
        }
        if(password == ""){
            alert("please enter a user name")
            return
        }else{
            console.log(userName)
            console.log(password)
            await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/authenticate/${userName}/${password}` ,{
                "method" : "GET"
            })
            .then(async function(res){
                const result = res.data
            const newSessionToken = await res.data.sessionToken
            const userNameToLocalStor = await res.data.userName
            localStorage.setItem('sessionToken' , newSessionToken)
            localStorage.setItem('userName' , userNameToLocalStor)
            console.log(result , " i a result")
            if(result === 403){
                alert('Wrong username')
            }else if(result === 404){
                alert('Wrong password')
            }else{
                window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
            }
            })
            // .then(
            //     window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
            //     )
            .catch((error) => {
                console.log(error)
            })
        }
        
    })

    // $("#routesBtn").click(async function(){
    //     axios.get(`https://fantasyapp-4012.herokuapp.com/routes/authenticate/${userName}/${password}`)
    //     .then(function(res){
    //         console.log(res, "i am response for auth route")
    //     })
    // })













})