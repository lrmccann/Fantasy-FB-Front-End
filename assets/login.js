$(function () {

    $("#loginBtn").click(function () {
        $('#loginModal').css('visibility', "visible")
    })

    $("#closeModalBtn").click(function () {
        $("#loginModal").css('visibility', "hidden")
    })

    $('#validateUserBtn').click(async function () {
        var userName = $('#usernameInput').val();
        var password = $('#passwordInput').val();
        if (userName == "") {
            alert("please enter a user name")
            return
        }
        if (password == "") {
            alert("please enter a password")
            return
        } else {
            console.log(userName)
            console.log(password)
            await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/authenticate/${userName}/${password}`, {
                "method": "GET"
            })
                .then(async function (res) {
                    const result = res.data
                    const newSessionToken = await res.data.sessionToken
                    const userNameToLocalStor = await res.data.userName
                    const teamNameToLocalStor = await res.data.teamName
                    localStorage.setItem('sessionToken', newSessionToken)
                    localStorage.setItem('userName', userNameToLocalStor)
                    localStorage.setItem('teamName' , teamNameToLocalStor)
                    if (result === 403) {
                        alert('Wrong username')
                    } else if (result === 404) {
                        alert('Wrong password')
                    } else {
                        window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    })

    $('.signupBtn').click(function () {
        window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/signup.html?')
    })

    $('.recoverPassBtn').click(function () {
        $('.passwordRecoveryModal').css('visibility', 'visible')
    })

    $('.closeRecoverPassBtn').click(function () {
        $('.closePasswordRecoveryModal').css('visibility', 'hidden')
    })

})