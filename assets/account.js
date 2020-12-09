$(function () {

    const displayInfo = async () => {
        var getDiv = document.getElementById('userStatsCont');
        var getDivTwo = document.getElementById('leftColumn');
        var getDivThree = document.getElementById('defaultTitle');
        var newP = document.createElement('p');
        newP.setAttribute('class', 'userStatsEven');
        var newP2 = document.createElement('p');
        newP2.setAttribute('class', 'userStatsOdd');
        var newP3 = document.createElement('p');
        newP3.setAttribute('class', 'userStatsEven');
        var newP4 = document.createElement('p');
        newP4.setAttribute('class', 'userStatsOdd');
        var newP5 = document.createElement('p');
        newP5.setAttribute('class', 'userStatsEven');
        var newP6 = document.createElement('p');
        newP6.setAttribute('class', 'userStatsOdd')
        newP.innerHTML = `<p> Username : ${currentUser.userName} </p>`;
        newP2.innerHTML = `<p> Team Name : ${currentUser.teamName} </p>`;
        newP3.innerHTML = `<p> Email : ${currentUser.email} </p>`;
        newP4.innerHTML = `<p> Age : ${currentUser.age} </p>`
        newP5.innerHTML = `<p> Favorite Team : ${currentUser.favoriteTeam} </p>`
        newP6.innerHTML = `<p>Current location :  ${currentUser.city}, ${currentUser.zipCode} </p>`
        getDivThree.append(newP);
        getDivThree.append(newP2);
        getDivThree.append(newP3);
        getDivThree.append(newP4);
        getDivThree.append(newP5);
        getDivThree.append(newP6);
        getDiv.append(getDivTwo);
    }
    setTimeout(() => {
        displayInfo()
    }, 3 * 35)
})

const getUsernameFromLocalStorage = localStorage.getItem('userName')

var currentUser = {}

$(async () => {
    console.log(getUsernameFromLocalStorage)
    await axios.get(`https://fantasyapp-4012.herokuapp.com/routes/getSingleUser/${getUsernameFromLocalStorage}`)
        .then(function (currentUserDetails) {
            console.log(currentUserDetails.data)
            currentUser = currentUserDetails.data
        })
})

