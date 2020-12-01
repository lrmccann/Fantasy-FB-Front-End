$(function () {

    let dropDownButton = document.getElementById('hamBtn');
    let homeBtn = document.getElementById('homeBtn');


    const leagueMembers = []

    const getLeagueMembers = async () => {
        axios.get('https://fantasyapp-4012.herokuapp.com/routes/hello')
            .then(function (res) {
                leagueMembers.push(res.data)
                // if(leagueMembers === undefined){
                //     getPlayers();
                // }else{
                //     // console.log(leagueMembers)
                //     return leagueMembers 
                // }
                return leagueMembers
            })
    }
    getLeagueMembers()

    const setWeeklyRankings = async () => {
        console.log(leagueMembers[0])
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
                    // console.log(item)
                    var today = new Date();
                    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var finalizedDate = date.toString()
                    // console.log(date)
                    // console.log(item.Date)
                        if(finalizedDate < item.Date){
                        var getDiv = document.getElementById('liveGamesCont');
                        var newDiv = document.createElement('div');
                        var dayOfGame = item.DateTime.slice(0 , 9)
                        var timeOfGame = item.DateTime.slice(12 , 16)
                        var divToAppend = `<div class="gamesDiv"><p class="gamesDivText">${item.AwayTeam} @ </p>
                                            <p class="gamesDivText">${item.HomeTeam} </p><p class="gamesDivText"> Date: ${dayOfGame}</p>
                                            <p class="gamesDivText"> Time: ${timeOfGame}</p></div>`
                        newDiv.innerHTML = divToAppend
                        getDiv.appendChild(newDiv)
                    }
                    else{
                        var getDivAgain = document.getElementById('liveGamesCont');
                        var anotherNewDiv = document.createElement('div')
                        var anotherDivToAppend = `<div class="noGamesText"><h2>No games currently scheduled</h2>`
                        anotherNewDiv.innerHTML = anotherDivToAppend
                        getDivAgain.appendChild(anotherNewDiv)
                    }

                })
            })
    }
    fetchWeeklyGames() 


    const appendToLeagueMatchUpDiv = () => {
        setTimeout(() => {
            leagueMembers[0].forEach(item => {
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
        console.log("hello")
        if (isToggled = false) {
            $('#dropdown-menu').hide()
        }
        else if (isToggled = true) {
            $('#dropdwon-menu').show()
        }
    })
    homeBtn.click('click', function () {
    })
});