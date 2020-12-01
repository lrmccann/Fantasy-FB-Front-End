$(function () {

    const fetchSeasons = async () => {
       await axios.get("https://fantasyapp-4012.herokuapp.com/routes/seasons" , {
            "method" : "GET"
        })
        // .then(async response => {
        //     const getDiv = document.getElementById('playersHolder')
        //         const storeArray = response.data
        //         const finalArray = storeArray.slice(0 , 10)
        //         finalArray.each(item => {
        //             console.log(item, "i am item")
        //             // getDiv.append(`<div class="players"><img class="playerImg" src="null">
        //             //              <p class="playerName">${item.Name}</p></div>`)
        //         })
        // })
        
        .then(async response => {
                 const storeArray = response.data
                const finalArray = storeArray.slice(0 , 10)
                finalArray.forEach(item => {
                    console.log(finalArray)

                    var getDiv = document.getElementById('players');

                    var newDiv = document.createElement('div')
                    // newDiv.setAttribute("class" , "newClass")

                    // var p1 = document.createElement('p');
                    // var p2 = document.createElement('p')
                    // var p3 = document.createElement('p')
                    // var p4 = document.createElement('p');
                    // var p5 = document.createElement('p');

                    // p1.innerHTML = item.Name;
                    // p2.innerHTML = item.AverageDraftPosition;
                    // p3.innerHTML = item.ByeWeek;
                    // p4.innerHTML = item.Position;
                    // p5.innerHTML = item.Team;

                    // var divToPlace = document.createElement('div')

                    // divToPlace.setAttribute("class" , "players")

                    var randomShit = `<div class="newClass"><img src="${item.PhotoUrl}" class="playerImg" /><p class="playerNameText">${item.Name}</p><p class="avgDraftPosText">${item.AverageDraftPosition}</p>
                    <p class="byeWeekText">${item.ByeWeek}</p><p class="positionText">${item.Position}</><p class="teamText">${item.Team}</p></div>`

                    newDiv.innerHTML = randomShit
                    // divToPlace.innerHTML = randomShit

                    

                    getDiv.appendChild(newDiv)

                    // getDiv.append(divToPlace)
                    

                    // getDiv.appendChild(div);
                    // div.appendChild(p1)
                    // div.appendChild(p2)
                    // div.appendChild(p3)
                    // div.appendChild(p4)
                    // div.appendChild(p5)
                })
        })

        // .then(async response => {
        //     // console.log(await response.data)
        //     const storeArray = response.data
        //     const finalArray = storeArray.slice(0 , 10)
        //     finalArray.map((index , myKey) => {
        //         myKey = index.Name
        //         console.log(myKey , "dis my key")
        //         console.log(index , "dis index")
        //     $('#playersHolder').append(`<div  class="players"><img class="playerImg" src="null">
        //                                 <p class="playerName">${index.Name}</p></div>`)
        //     })
        // })
    }
    fetchSeasons()










})