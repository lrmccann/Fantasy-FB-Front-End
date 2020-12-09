// $(async () => {
//     await axios.get("https://fantasyapp-4012.herokuapp.com/routes/getAllPlayers", {
//         "method": "GET"
//     })
//         .then(async response => {
//             const storeArray = response.data
//             const finalArray = storeArray.slice(0, 10)
//             finalArray.map((index, myKey) => {
//                 myKey = index.Name
//                 console.log(index, "i am theeee index")
//                 // console.log(myKey, " i am the keeeey")
//                 var getDiv = document.getElementById('players');
//                 var newDiv = document.createElement('div')
//                 var randomShit = `<div class="playerStats"><button id=${index.PlayerID} class="showDetailsBtn"><img src="${index.PhotoUrl}" class="playerImg" /><p id="paddingTopOnePerc">${index.Name}</p><p id="paddingTopOnePerc">${index.AverageDraftPosition}</p>
//             <p id="paddingTopOnePerc">${index.ByeWeek}</p><p id="paddingTopOnePerc">${index.Position}</><p id="paddingTopOnePerc">${index.Team}</p></button></div>`
//                 newDiv.innerHTML = randomShit
//                 getDiv.appendChild(newDiv)
//                 $('.showDetailsBtn').click(function (event) {
//                     event.preventDefault();
//                     const playerIDTarget = event.target.id
//                     showPlayerDetails(playerIDTarget)
//                 })
//             })
//         })
// })
// const showPlayerDetails = async (id) => {
//     const idToSearch = id
//     console.log(idToSearch)
//     await axios.get(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/2020/${idToSearch}?key=12afde5143164914a73228616f79c12f`, {
//         "method": "GET"
//     })
//         .then(async response => {
//             // var getModal = document.getElementById('playerDetailsModal')
//             const responseArray = await response.data
//             responseArray.forEach((index) => {
//                 var getDiv = document.getElementById('modalHead');
//                 getDiv.innerHTML = `<img class="playerIconForModal" src=${index.PhotoUrl}><h3 class="playerNameTextForModal">${index.Name}</h3>
//                     <p class="gameDetailsForModal">${index.Team}(#) v ${index.UpcomingGameOpponent}<p class="upcomingOponnentRank" id="upcomingOpponentRank">
//                     (${index.UpcomingOpponentRank})</p></p>`

// //////////// ALL COMMENTED OUT
//                 // var getDiv = document.getElementById('modalHead');
//                 // var playIconImage = document.createElement('img');
//                 // playIconImage.setAttribute('class', 'playerIconForModal');
//                 // playIconImage.src = null;
//                 // // index.UsaTodayHeadshotUrl;
//                 // var playerNameText = document.createElement('h3');
//                 // playerNameText.setAttribute('class', 'playerNameTextForModal');
//                 // playerNameText.innerHTML = index.Name;
//                 // var gameDetails = document.createElement('p');
//                 // gameDetails.setAttribute('class', 'gameDetailsForModal');
// //////////// ALL COMMENTED OUT END

//                 if (index.UpcomingOpponentRank < 22) {
//                     $('.upcomingOpponentRank').css('color', 'red')
//                 } else if (index.UpcomingOpponentRank > 11 && index.UpcomingOpponentRank < 22) {
//                     $('.upcomingOpponentRank').css('color', 'gray')
//                 } else {
//                     $('.upcomingOpponentRank').css('color', 'green')
//                 }
//                 // gameDetails.innerHTML = `<p>${index.Team}(#) v ${index.UpcomingGameOpponent}<p class="upcomingOpponentRank">(${index.UpcomingOpponentRank})</p></p>`
//                 // index.Team;
//                 // getDiv.appendChild(playIconImage)
//                 // getDiv.appendChild(playerNameText)
//                 // getDiv.append(gameDetails)


//                 console.log(index)
//                 $('.playerDetailsModal').css('visibility', 'visible')
//                 var getDiv2 = document.getElementById('highlightsBarForModal');
//                 var getDivID = document.createElement('div');
//                 getDivID.setAttribute('class', 'makeFlexColumnsTwo')
//                 // getDivID.innerHTML = `<p>${index.FantasyPosition}</p><p>Fantasy Points</p>`
//                 getDivID.innerHTML = `<p>${index.AverageDraftPosition}</p><p>Season Rank </p>`
//                 // getDivID.innerHTML = index.AverageDraftPosition
//                 getDiv2.appendChild(getDivID)

//                 $('#closeModalBtn').click(function () {
//                     $('.playerDetailsModal').css('visibility', 'hidden')
//                     $('.playerDetailsModal').html("")
//                 })

// //////////// ALL COMMENTED OUT
//                 // var getDiv = document.getElementById('modalHead');
//                 // var playIconImage = document.createElement('img');
//                 // playIconImage.setAttribute('class' , 'playerIconForModal');
//                 // playIconImage.src = index.UsaTodayHeadshotUrl;
//                 // var playerNameText = document.createElement('h3');
//                 // playerNameText.setAttribute('class' , 'playerNameTextForModal');
//                 // playerNameText.innerHTML = index.Name;
//                 // var gameDetails = document.createElement('p');
//                 // gameDetails.setAttribute('class' , 'gameDetailsForModal');
//                 // gameDetails.innerHTML = index.Team;

//                 // getDiv.appendChild(playIconImage)
//                 // getDiv.appendChild(playerNameText)
//                 // getDiv.append(gameDetails)

//                 // var getDiv2 = document.getElementById('highlightsBarForModal');
//                 // var getDivID = document.createElement('div');
//                 // getDivID.setAttribute('class' , 'makeFlexColumnsTwo')
//                 // getDivID.innerHTML = `<p>${index.FantasyPosition}</p><p>Fantasy Points</p>`
//                 // getDivID.innerHTML = `<p>${index.AverageDraftPosition}</p><p>Season Rank </p>`
//                 // // getDivID.innerHTML = index.AverageDraftPosition
//                 //     getDiv2.appendChild(getDivID)
// //////////// ALL COMMENTED OUT ENDED

//             })
//         })

// }

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