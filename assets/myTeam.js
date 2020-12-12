// appends users custom team name to container
$(()=>{
    const userNameFromLS = localStorage.getItem('teamName');
    var getDiv = document.getElementById('teamContainerHeader');
    var createTextEl = document.createElement('h2');
    createTextEl.setAttribute('class' , 'teamContHeaderText');
    createTextEl.innerHTML = `${userNameFromLS}`;
    getDiv.appendChild(createTextEl)
})

