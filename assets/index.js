$(function () {

let dropDownButton = document.getElementById('hamBtn')
let homeBtn = document.getElementById('homeBtn')




// function toggleSideBar() {
//     var isToggled = false;
//     if(isToggled === false){
//         $('dropdown-menu').hide()
//     }
//     else if(isToggled === true){
//         $('dropdown-menu').show()
//     }
//     dropDownButton.addEventListener('click' , function(){
//         isToggled === true
//     })

// }

// $.get("../screens/leagueMatchUps.json" , function(data) {
//     console.log(data)
// })

            // kinda working so maybe use ////////
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


const showDropdown = () => {
    if(isToggled === true) {
        $('hamBtn').hide()
        // dropDownButton.remove()
        isToggled === false
    }
    else if(isToggled === false) {
        $('hamBtn').show()
        
    }
}
// dropDownButton.click(showDropdown)

});