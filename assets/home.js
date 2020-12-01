$(function () {

let dropDownButton = document.getElementById('hamBtn');
let homeBtn = document.getElementById('homeBtn');


const players = []

    const getPlayers = async () => {
    axios.get('https://fantasyapp-4012.herokuapp.com/routes/hello')
    .then(function(res) {
        players.push(res.data)
        if(players === undefined){
            getPlayers();
        }else{
            // console.log(players)
            return players 
        }
    })
}
getPlayers()

const fetchSeasons = async () => {
 axios.get("https://fantasyapp-4012.herokuapp.com/routes/seasons", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
		"x-rapidapi-host": "https://www.thesportsdb.com/api.php"
	}
})
.then(async response => {
    // console.log(response.json());
    console.log(response)
    return await response
})
.catch(err => {
	console.error(err);
});
}
fetchSeasons()

const appendToLeagueMatchUpDiv = () =>{
    setTimeout(() => {
        players[0].map((index , myKey) => {
            myKey = index.userName
            console.log(index.userData , "i am index")
            // return `<div class="leagueMatchUpCont"> <a href=${index.userData.userName} /> </div> `
            $('.leagueUsersMapped').append(`<div class="leagueMatchUpCont"> <p class="leagueUsersText">${index.userData.userName} </p> </div> `)
        })
    } , 3 * 50)
}
appendToLeagueMatchUpDiv()


$('#hamBtn').on('click' , function(event){
        event.preventDefault();
        // let isToggled = false;
        $('#dropdown-menu').css('float','none');
        console.log("hello")
        if(isToggled = false){
            $('#dropdown-menu').hide()
        }
        else if(isToggled = true){
            $('#dropdwon-menu').show()
        }
    })
    homeBtn.click('click' , function(){
    })


// const showDropdown = () => {
//     if(isToggled === true) {
//         $('hamBtn').hide()
//         // dropDownButton.remove()
//         isToggled === false
//     }
//     else if(isToggled === false) {
//         $('hamBtn').show()
        
//     }
// }

});