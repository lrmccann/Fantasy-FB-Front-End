var fullDateForAPI = ""

$(()=>{
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    const year = date.getFullYear();
    const day = date.getDay();
    var shortenMonth = month.slice(0, 3)
    fullDateForAPI = `${year}-${shortenMonth}-${day}`
})





$(function () {

    // move to home page i think, so we can use the date to select
    // our players and get the most updated into

    // const seasons = ["PRE , REG, POST"]
    // const weeksPRE = [1,2,3,4];
    // const weeksREG = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    // const weeksPOST = [1,2,3,4]


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
                    console.log(result)
                    const newSessionToken = await res.data.sessionToken
                    const userNameToLocalStor = await res.data.userName
                    const teamNameToLocalStor = await res.data.teamName
                    const usersFantasyTeam = [await res.data.userFantasyTeam]
                    localStorage.setItem('sessionToken', newSessionToken)
                    localStorage.setItem('userName', userNameToLocalStor)
                    localStorage.setItem('teamName' , teamNameToLocalStor)
                    localStorage.setItem("userFantasyTeam" , usersFantasyTeam)
                    if (result === 403) {
                        alert('Wrong username')
                    } else if (result === 404) {
                        alert('Wrong password')
                    } else {
                        converUserTeamToID(await usersFantasyTeam)
                        // window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
                    }
                })
                // .then(loadAndSaveUsersTeam(userName))
                .catch((error) => {
                    console.log(error)
                })
        }

    })
    const converUserTeamToID = async (arrayOfPlayers) => {
        console.log(arrayOfPlayers, " i am array of players for user team")
        await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/convertUserTeamToID/${arrayOfPlayers}/${fullDateForAPI}` , {
            "method" : "GET"
        })
        .then(arrayOfPlayerIDs => {
            console.log(arrayOfPlayerIDs , "should be array of player ids")
        })

    }


    // const loadAndSaveUsersTeam = async (userName) => {
    //     await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/authenticate/getUserTeam/${userName}`, {
    //         "method": "GET"
    //     })
    //     .then(usersFantasyTeam => {
    //         console.log(usersFantasyTeam , "users fantasy team")
    //     })
    // }

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