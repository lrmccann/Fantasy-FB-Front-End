$(function () {

    const fetchPlayers = async () => {
        await axios.get("https://fantasyapp-4012.herokuapp.com/routes/seasons", {
            "method": "GET"
        })
            .then(async response => {
                const storeArray = response.data
                const finalArray = storeArray.slice(0, 10)
                finalArray.forEach(item => {
                    console.log(finalArray)
                    var getDiv = document.getElementById('players');
                    var newDiv = document.createElement('div')
                    var randomShit = `<div class="newClass"><img src="${item.PhotoUrl}" class="playerImg" /><p class="playerNameText">${item.Name}</p><p class="avgDraftPosText">${item.AverageDraftPosition}</p>
                    <p class="byeWeekText">${item.ByeWeek}</p><p class="positionText">${item.Position}</><p class="teamText">${item.Team}</p></div>`
                    newDiv.innerHTML = randomShit
                    getDiv.appendChild(newDiv)
                })
            })

    }
            fetchPlayers()

})