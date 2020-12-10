$(async () => {
    await axios.get("https://fantasyapp-4012.herokuapp.com/routes/getAllPlayers", {
        "method": "GET"
    })
        .then(async response => {
            const storeArray = response.data
            const finalArray = storeArray.slice(0, 10)
            finalArray.forEach((index) => {
                var getDiv = document.getElementById('players');
                var newDiv = document.createElement('div')
                var randomShit = `<button name=${index.PlayerID} class="playerStats"><img src="${index.PhotoUrl}" class="playerImg" /><p id="paddingTopOnePerc">${index.Name}</p><p id="paddingTopOnePerc">${index.AverageDraftPosition}</p>
            <p id="paddingTopOnePerc">${index.ByeWeek}</p><p id="paddingTopOnePerc">${index.Position}</><p id="paddingTopOnePerc">${index.Team}</p></button>`
                newDiv.innerHTML = randomShit
                getDiv.appendChild(newDiv)
                targetedPlayerID = index.PlayerID
            })
            $('.playerStats').click(function (event) {
                event.preventDefault();
                    const playerIDTarget = event.target.name
                    showPlayerDetails(playerIDTarget)
            })
        })
})



const showPlayerDetails = async (id) => {
    const idToSearch = id
    console.log(idToSearch)
    //  ROUTE WITH OLD API KEY    https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/${idToSearch}?key=12afde5143164914a73228616f79c12f //
    await axios.get(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/${idToSearch}?key=71f358599b0f4a87b86f5f29788eea9b`, {
        "method": "GET"
    })
        .then(async response => {
            const playerDetails = await response.data[0]
            console.log(response.data[0])
                var getDiv = document.getElementById('modalHead');
                getDiv.innerHTML = `<img class="playerIconForModal" src=${playerDetails.PhotoUrl}><h3 class="playerNameTextForModal">${playerDetails.Name}</h3>
                    <p class="gameDetailsForModal">${playerDetails.Team}(#) v ${playerDetails.UpcomingGameOpponent}<p class="upcomingOponnentRank" id="upcomingOpponentRank">
                    (${playerDetails.UpcomingOpponentRank})</p></p>`

                if (playerDetails.UpcomingOpponentRank < 22) {
                    $('.upcomingOpponentRank').css('color', 'red')
                } else if (playerDetails.UpcomingOpponentRank > 11 && playerDetails.UpcomingOpponentRank < 22) {
                    $('.upcomingOpponentRank').css('color', 'gray')
                } else {
                    $('.upcomingOpponentRank').css('color', 'green')
                }

                $('.playerDetailsModal').css('visibility', 'visible')
                var getDiv2 = document.getElementById('highlightsBarForModal');
                var getDivID = document.createElement('div');
                getDivID.setAttribute('class', 'makeFlexColumnsTwo')
                // getDivID.innerHTML = `<p>${index.FantasyPosition}</p><p>Fantasy Points</p>`
                getDivID.innerHTML = `<p>${playerDetails.AverageDraftPosition}</p><p>Season Rank </p>`
                // getDivID.innerHTML = index.AverageDraftPosition
                getDiv2.appendChild(getDivID)

                $('#closeModalBtn').click(function () {
                    $('.playerDetailsModal').css('visibility', 'hidden')
                    $('.playerDetailsModal').html("")
                })
            })

}

// BUTTONS IN SEARCH CONTAINER
$('.watchlistBtn').click(function(){
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/watchList.html?')
})

$('.comparePlayersBtn').click(function(){
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/comparePlayers.html?')
})

$('.nflNewsBtn').click(function(){
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/nflNews.html?')
})

$('.fantasyNewsBtn').click(function(){
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/fantasyNews.html?')
})
// END BUTTONS IN SEARCH CONTAINER

// SEARCH BAR BUTTON AND ENTER BUTTON FOR SEARCH BAR
$('.searchBarBtn').click(function(){
    
})

// END SEARCH BAR BUTTON AND ENTER BUTTON FOR SEARCH BAR