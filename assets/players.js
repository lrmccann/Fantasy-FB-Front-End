var generalPlayerDetailsArray = []
// initial API call to get top ranking players by day
$(async () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    const year = date.getFullYear();
    const day = date.getDay();
    var shortenMonth = month.slice(0, 3)
    const fullDateForAPI = `${year}-${shortenMonth}-${day}`
    await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/getAllPlayers/${fullDateForAPI}`, {
        "method": "GET"
    })
        .then(async players => {
            const storeUsersArray = await players.data;
            const playersToMap = await storeUsersArray.slice(0, 10);
            playersToMap.forEach(async (playerStats) => {
                generalPlayerDetailsArray = playersToMap
                // console.log(playerStats)
                var getPlayersDiv = document.getElementById('players');
                var createDivEl = document.createElement('div')
                // <img src="${index.PhotoUrl}" class="playerImg" /> /// add this back when we get pictures
                createDivEl.innerHTML = `<button name=${playerStats.PlayerID} class="playerStats">
                <p id="paddingTopOnePerc">${playerStats.ShortName}</p><p id="paddingTopOnePerc">${playerStats.Team}</p>
            <p id="paddingTopOnePerc">${playerStats.Position}</p><p id="paddingTopOnePerc">${playerStats.LastGameFantasyPoints}</>
            <p id="paddingTopOnePerc">${playerStats.ProjectedFantasyPoints}</p><p id="paddingTopOnePerc">#</p></button>`
                getPlayersDiv.appendChild(createDivEl)
            })
        })
// on click function to target player id to pass toshowPlayerDetails
    $('.playerStats').click(async function (event) {
        event.preventDefault();
        const playerIDTarget = event.target.name
        showPlayerDetails(playerIDTarget)
    })
})

// returns a more specific list of player stats by week, by using player id
const showPlayerDetails = async (id) => {
    console.log(id, " I am id param")
    await axios.get(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/${id}?key=698a33680a214757894fa156ab50c0b2`, {
        "method": "GET"
    })
// .then to fire up function to retrieve player news for overview section of modal
        .then(getNewsForPlayerOverview(id))
// data to concat the player modal
        .then(async getDetailedPlayerStatsForModal => {
            const detailedPlayerStats = await getDetailedPlayerStatsForModal.data[0]
            const found = generalPlayerDetailsArray.find(elementToCompare => elementToCompare.PlayerID == id);
            console.log(detailedPlayerStats, "specific player stats")
            // console.log(found, "general player stats")
// getting initial Div and loading data for modal head
            var getDiv = document.getElementById('playerDetailsModal');
            getDiv.innerHTML = `<div class="modalHead"><img class="playerIconForModal" src=${detailedPlayerStats.PhotoUrl}><h3 class="playerNameTextForModal">${found.Name}</h3>
            <p class="gameDetailsForModal">${found.Team} v ${found.Opponent}<p class="upcomingOponnentRank" id="upcomingOpponentRank">
            (${found.OpponentRank})</p></p></div>`;
// button to close modal
            var closeModalBtn = document.createElement('div')
            closeModalBtn.setAttribute('class' , 'closeModalCont')
            closeModalBtn.innerHTML = `<button class="closeModalBtn"><p class="closeModalText"> X </p></button>`;
// highlights bar for modal, detailing player accomplishments
            var createDiv = document.createElement('div');
            createDiv.setAttribute('class', 'highlightsBarForModal');
            createDiv.innerHTML = `<p id="highlightsBarText">Average Draft Pos: ${detailedPlayerStats.AverageDraftPosition}</p>
            <p id="highlightsBarText">Fantasy Points TD : ${detailedPlayerStats.FantasyPointsYahoo}</p>
            <p id="highlightsBarText">TD's : ${detailedPlayerStats.Touchdowns}`;
// top button bar for modal, options : overview, game logs, and stats
            var getDiv2 = document.createElement('div');
            getDiv2.setAttribute('class', 'btnBarForModal');
            getDiv2.innerHTML = `<button class="overviewBtn" id="btnOnBtnBar"><h6>Overview</h6></button>
            <button class="gameLogsBtn" id="btnOnBtnBar"><h6>Game Log</h6></button><button class="statsBtn" id="btnOnBtnBar"><h6>Stats</h6></button>`
// tab bar for modal, displaying 4 more options : add player, compare player, add to watchlist, and discuss player
            var createModalTabBar = document.createElement('div');
            createModalTabBar.setAttribute('class' , 'modalTabBar');
            createModalTabBar.innerHTML = `<button class="addPlayerToRosterBtnTabBar"><img src="" class="addPlayerBtnIconTabBar"><p class="addPlayerTabBarText">Add</p></button>
                                           <button class="comparePlayersBtnTabBar"><img src="" class="comparePlayerBtnIconTabBar"><p class="comparePlayerTabBarText">Compare</p></button>
                                           <button class="addPlayerToWatchListBtnTabBar"><img src="" class="addPlayerToWatchListIconTabBar"><p class="addPlayerToWatchListTabBarText">Watch</p></button>
                                           <button class="discussPlayerBtnTabBar"><img src="" class="discussPlayerIconTabBar"><p class="discussPlayerTabBarText">Discuss</p></button>`
// change color of opposing team based on team rank
            if (found.OpponentRank > 22) {
                $('.upcomingOpponentRank').css('color', 'red')
            } else if (found.OpponentRank > 11 && found.OpponentRank < 22) {
                $('.upcomingOpponentRank').css('color', 'gray')
            } else {
                $('.upcomingOpponentRank').css('color', 'green')
            }

            getDiv.appendChild(closeModalBtn)
            getDiv.appendChild(createDiv);
            getDiv.appendChild(getDiv2);
            getDiv.appendChild(createModalTabBar)
            $('.playerDetailsModal').css('visibility', 'visible');
        })
// targeting modal close button to close the modal
        $('.closeModalBtn').click(function(event){
            event.preventDefault();
                $('.playerDetailsModal').css('visibility', 'hidden')
                $('.playerDetailsModal').html("")
        })
}
// gets news for modal overview section using player id
const getNewsForPlayerOverview = async (id) => {
    await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/NewsByPlayerID/${id}?key=698a33680a214757894fa156ab50c0b2`, {
        "method": "GET"
    })
    .then(async allNewsArticles => {
        var newsStoriesByPlayer = await allNewsArticles.data
        newsStoriesByPlayer.forEach(async (news) => {
            var newsStoryHeader = news.Title
            var newsStoryBody = news.Content
            // console.log(newsStoryHeader , newsStoryBody)
            var appendToNewsToModal = document.getElementById('playerDetailsModal')
            var createDiv = document.createElement('div')
            createDiv.setAttribute('class' , 'overViewCont');
            createDiv.innerHTML = `<h5 class="articleHeader">${newsStoryHeader}</h5><br><p class="articleBody">${newsStoryBody}</p>`
            appendToNewsToModal.appendChild(createDiv)
        })
    })
}


// BUTTONS IN SEARCH CONTAINER
$('.watchlistBtn').click(function () {
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/watchList.html?')
})

$('.comparePlayersBtn').click(function () {
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/comparePlayers.html?')
})

$('.nflNewsBtn').click(function () {
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/nflNews.html?')
})

$('.fantasyNewsBtn').click(function () {
    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/fantasyNews.html?')
})
// END BUTTONS IN SEARCH CONTAINER

// SEARCH BAR BUTTON AND ENTER BUTTON FOR SEARCH BAR
$('.searchBarBtn').click(function () {

})

// END SEARCH BAR BUTTON AND ENTER BUTTON FOR SEARCH BAR

// BOTTOM TAB BAR BUTTONS
$('.addPlayerToRosterBtnTabBar').click(function(){

})

$('.comparePlayersBtnTabBar').click(function(){

})

$('.addPlayerToWatchListBtnTabBar').click(function(){

})

$('.discussPlayerBtnTabBar').click(function(){
    
})

// END BOTTOM TAB BAR BUTTONS
