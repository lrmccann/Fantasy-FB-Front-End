

    const allLeagueMembers = []

    const getLeagueMembers = async () => {
        // $(() => {
            await axios.get('https://fantasyapp-4012.herokuapp.com/routes/getAllUsers')
            .then(function (allUserResData) {
                allLeagueMembers.push(allUserResData.data)
                return allLeagueMembers
            })
        // })

        // })
    }
    getLeagueMembers()

$(function () {

    const setWeeklyRankings = async () => {
        setTimeout(() => {
            console.log(allLeagueMembers[0], "set weekly")
            allLeagueMembers[0].forEach(item => {
                if (item.userData.rank === 1) {
                    var goldMedal = "../images/gold_medal.png"
                    var getDiv = document.getElementById('rankCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankDiv"><p class="rankText">${item.userData.rank}</p>
                    <p class="rankText">${item.userData.teamName}</p><img class="rankMedal" src="${goldMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else if (item.userData.rank === 2) {
                    var silverMedal = "../images/silver_medal2.png"
                    var getDiv = document.getElementById('rankCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankDiv"><p class="rankText">${item.userData.rank}</p>
                    <p class="rankText">${item.userData.teamName}</p><img class="rankMedal" src="${silverMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else if (item.userData.rank === 3) {
                    var bronzeMedal = "../images/bronze_medal.png"
                    var getDiv = document.getElementById('rankCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankDiv"><p class="rankText">${item.userData.rank}</p>
                    <p class="rankText">${item.userData.teamName}</p><img class="rankMedal" src="${bronzeMedal}"/></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                } else {
                    // var dash = "-"
                    var getDiv = document.getElementById('rankCont');
                    var newDiv = document.createElement('div')
                    var divToAppend = `<div class="rankDiv"><p class="rankText">${item.userData.rank}</p>
                    <p class="rankText">${item.userData.teamName}</p><h1 class="rankMedalNone""> - </h1></div>`
                    newDiv.innerHTML = divToAppend
                    getDiv.appendChild(newDiv)
                }
            })
        }, 3 * 80)
    }
    setWeeklyRankings()

    const fetchWeeklyGames = async () => {
        await axios.get("https://fantasyapp-4012.herokuapp.com/routes/gamesByWeek", {
            "method": "GET"
        })
            .then(async response => {
                const storeArray = response.data
                const finalArray = storeArray.slice(200, 295)
                finalArray.forEach(item => {
                    console.log(item)
                    var today = new Date();
                    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var finalizedDate = date.toString()
                    // console.log(date)
                    // console.log(item.Date)
                    if (finalizedDate < item.Date) {
                        var getDiv = document.getElementById('liveGamesCont');
                        var newDiv = document.createElement('div');
                        var dayOfGame = item.DateTime.slice(0, 9)
                        var timeOfGame = item.DateTime.slice(12, 16)
                        var divToAppend = `<div class="gamesDiv"><p class="gamesDivText">${item.AwayTeam} @ </p>
                                            <p class="gamesDivText">${item.HomeTeam} </p><p class="gamesDivText"> Date: ${dayOfGame}</p>
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
            allLeagueMembers[0].forEach(item => {
                // divs for jquery
                var getDiv = document.getElementById('leagueMatchesCont')
                var newDiv = document.createElement('div')
                var appendToDiv = `<div class="leagueUsersMapped">
                                <h3 class="leagueUsersText">${item.userData.teamName}</h3></div>`
                newDiv.innerHTML = appendToDiv
                getDiv.appendChild(newDiv)
            })
        }, 3 * 50)
    }
    appendToLeagueMatchUpDiv()


    $('#hamBtn').on('click', function (event) {
        event.preventDefault();
        // let isToggled = false;
        $('#dropdown-menu').css('float', 'none');
        if (isToggled = false) {
            $('#dropdown-menu').hide()
        }
        else if (isToggled = true) {
            $('#dropdwon-menu').show()
        }
    })
});