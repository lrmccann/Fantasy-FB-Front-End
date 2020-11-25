$(function () {

let dropDownButton = document.getElementById('hamBtn');
let homeBtn = document.getElementById('homeBtn');


const players = []


// $('#idkidk').on('click' , function(){
    const getPlayers = () => {
    // axios.default.get('https://fantasyapp-4012.herokuapp.com/routes/hello')
    axios.get('https://fantasyapp-4012.herokuapp.com/routes/hello')
    .then(function(res) {
        // console.log(res.data)
        players.push(res.data)
        
    })
    if(players === undefined){
        getPlayers();
    }else{
        // appendToLeagueMatchUpDiv()
        console.log(players)
    }
}
getPlayers()

// const appendToLeagueMatchUpDiv = () => {
//     for(i = 0; i < players.length; i++){
//     $('#leagueMatchesCont').append(`<div class="leagueMatchUpCont"><a href=${players[i]} `)
//     console.log(players[i] , "players for i")
//     }

// }

const appendToLeagueMatchUpDiv = () =>{
    players.map((index , myKey) =>{
        myKey = index.userName
        return `<div class="leagueMatchUpCont"> <a href=${index.userName} /> `
    })
}

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