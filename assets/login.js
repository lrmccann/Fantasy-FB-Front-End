$(function () {

    // const openLoginModal = async () => {
    //     getButton = document.getElementById('loginBtn').onclick(function(){

    //     })
    // }

    $("#loginBtn").click(function(){
        $('#loginModal').css('visibility', "visible")
        // var getModal = document.getElementById('loginModal')
        // getModal.removeAttribute("hidden")
        console.log("hello")
    })

    $("#closeModalBtn").click(function(){
        $("#loginModal").css('visibility' , "hidden")
        console.log("goodbye")
    })















})