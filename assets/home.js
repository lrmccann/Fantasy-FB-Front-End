

const allLeagueMembers = []

$(async () => {
    await axios.get('https://fantasyapp-4012.herokuapp.com/routes/getAllUsers')
        .then(function (allUserResData) {
            allLeagueMembers.push(allUserResData.data)
            return allLeagueMembers
        })
})

$(function () {

    const setWeeklyRankings = async () => {
        setTimeout( async () => {
            console.log(allLeagueMembers[0], "set weekly")
            await allLeagueMembers[0].forEach(item => {
                if (item.userData.rank === 1) {
                    var goldMedal = "../images/gold_medal.png"
                    var getDiv = document.getElementById('rankingsCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankingsDiv"><p class="rankingsText">${item.userData.rank}</p>
                    <p class="rankingsText">${item.userData.teamName}</p><img class="rankMedal" src="${goldMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else if (item.userData.rank === 2) {
                    var silverMedal = "../images/silver_medal2.png"
                    var getDiv = document.getElementById('rankingsCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankingsDiv"><p class="rankingsText">${item.userData.rank}</p>
                    <p class="rankingsText">${item.userData.teamName}</p><img class="rankMedal" src="${silverMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else if (item.userData.rank === 3) {
                    var bronzeMedal = "../images/bronze_medal.png"
                    var getDiv = document.getElementById('rankingsCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankingsDiv"><p class="rankingsText">${item.userData.rank}</p>
                    <p class="rankingsText">${item.userData.teamName}</p><img class="rankMedal" src="${bronzeMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else {
                    // var dash = "-"
                    var getDiv = document.getElementById('rankingsCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankingsDiv"><p class="rankingsText">${item.userData.rank}</p>
                    <p class="rankingsText">${item.userData.teamName}</p><h1 class="rankMedalNone""> - </h1></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                }
            })
        }, 3 * 90)
    }
    setWeeklyRankings()

    const fetchWeeklyGames = async () => {
        await axios.get("https://fantasyapp-4012.herokuapp.com/routes/gamesByWeek", {
            "method": "GET"
        })
            .then(async gamesByWeek => {
                const storeGames = gamesByWeek.data
                const sliceArray = storeGames.slice(200, 295)
                sliceArray.forEach(gamesToMap => {
                    console.log(gamesToMap)
                    var today = new Date();
                    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var finalizedDate = date.toString()
                    if (finalizedDate < gamesToMap.Date) {
                        var getDiv = document.getElementById('upcomingGamesCont');
                        var newDiv = document.createElement('div');
                        var dayOfGame = gamesToMap.DateTime.slice(0, 9)
                        var timeOfGame = gamesToMap.DateTime.slice(12, 16)
                        var divToAppend = `<div class="gamesDiv"><p class="gamesDivText">${gamesToMap.AwayTeam} @ </p>
                                            <p class="gamesDivText">${gamesToMap.HomeTeam} </p><p class="gamesDivText"> Date: ${dayOfGame}</p>
                                            <p class="gamesDivText"> Time: ${timeOfGame}</p></div>`
                        newDiv.innerHTML = divToAppend
                        getDiv.appendChild(newDiv)
                    }
                    else {
                        console.log("no games")
                    }
                })
            })
    }
    fetchWeeklyGames()


    const appendToLeagueMatchUpDiv = () => {
        setTimeout(() => {
            allLeagueMembers[0].forEach(userToMap => {
                // divs for jquery
                var getDiv = document.getElementById('leagueMatchesCont')
                var newDiv = document.createElement('div')
                var appendToDiv = `<div class="leagueUsersMapped">
                                <h3 class="leagueUsersText">${userToMap.userData.teamName}</h3></div>`
                newDiv.innerHTML = appendToDiv
                getDiv.appendChild(newDiv)
            })
        }, 3 * 50)
    }
    appendToLeagueMatchUpDiv()


    $('#hamBtn').on('click', function (event) {
        event.preventDefault();
        $('#dropdown-menu').css('float', 'none');
        if (isToggled = false) {
            $('#dropdown-menu').hide()
        }
        else if (isToggled = true) {
            $('#dropdwon-menu').show()
        }
    })
});