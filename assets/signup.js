$(function () {

    $(".createAccountBtn").click(async function (e) {
        e.preventDefault();
        const checkForInvalidFields = (fieldsToValidate) => {
            console.log(fieldsToValidate , "fields to validate")
            let validEmail = validEmailRegex.test(fieldsToValidate.email)
            switch(true){
                case fieldsToValidate.userName == "" || fieldsToValidate.userName < 8 && fieldsToValidate.userName > 16 :
                    alert('Make Sure The Username Requirements Are Followed');
                    return false;
                case fieldsToValidate.teamName === "" || fieldsToValidate.teamName < 5 && fieldsToValidate.teamName > 20 :
                    alert('Make Sure The Team Name Requirements Are Followed');
                    return false;
                case fieldsToValidate.email === "" || validEmail === false :
                    alert('Make Sure The Email Requirements Are Followed');
                    return false;
                case fieldsToValidate.password === "" || fieldsToValidate.password < 8 && fieldsToValidate.password > 16 :
                    alert('Make Sure The Password Requirements Are Followed');
                    return false;
                case fieldsToValidate.confirmPassword === "" || fieldsToValidate.password !== fieldsToValidate.confirmPassword :
                    alert('Make Sure You Passwords Match Requirements Are Followed');
                    return false;
                case fieldsToValidate.city === "" || fieldsToValidate.teamName < 3 && fieldsToValidate.teamName > 40 :
                    alert('Make Sure The City Requirements Are Followed');
                    return false;
                case fieldsToValidate.zipCode === "" || fieldsToValidate.teamName < 5 && fieldsToValidate.teamName > 20 :
                    alert('Make Sure The ZipCode Requirements Are Followed');
                    return false;
                default :
                    console.log("All checks passed")
                    return true;
            }
        }
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const userName = $("#userName").val();
        const teamName = $("#teamName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();
        const city = $("#city").val();
        const zipCode = $("#zipCode").val();
        const age = $("#age").val();
        const favoriteTeam = $("#favoriteTeam").val();
        const additionalInfo = $("#additionalInfo").val();
        const fieldsToValidate = ({userName , teamName , email , password , confirmPassword , city , zipCode , age , favoriteTeam , additionalInfo});
        var formsAreValid = checkForInvalidFields(fieldsToValidate);
        // console.log(formsAreValid)
        if(formsAreValid === false){
            alert('Please Fill Out All Required Information And Check Character Mins and Maxes')
            return
        }
        else{
            const signUpFormData = ({
                "salt": "",
                "password": password,
                "userData": {
                    "sessionToken": "",
                    "userName": userName,
                    "teamName": teamName,
                    "email": email,
                    "city": city,
                    "zipCode": zipCode,
                    "age": age,
                    "favoriteTeam": favoriteTeam,
                    "additionalInfo": additionalInfo
                }
            })
            // console.log(signUpFormData)
            await axios.post(`https://fantasyapp-4012.herokuapp.com/routes/createAccount`, signUpFormData, {
                "method": "POST"
            })
                .then(async function (result) {
                    const userDataWithSessionToken = await result.data
                    console.log(userDataWithSessionToken)
                    localStorage.setItem('userName' , userDataWithSessionToken.userName )
                    localStorage.setItem('sessionToken', userDataWithSessionToken.sessionToken)
                })
                .then(function () {
                    window.location.replace('file:///Users/logan/Desktop/Fantasy-FB/front-end/screens/home.html?')
                })
            };
    });
    // $('.testBtn').on( 'click' , function(){
    //     // $('#file_input').trigger('click');
    //     $('#file_input').onchange = (e) => {
    //         e.preventDefault();
    //         var file = e.target.files;
    //         var reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         console.log(file , "i am file")
    //         reader.onload = readerEvent => {
    //             var content = readerEvent.target.result;
    //             console.log(content, " i will be the content of the file selected")
    //         } 
    //     }
    // })


    var myFiles = [];

    $('#testBtn').click(function() {
        $('<input type="image" multiple>').on('change', function () {
            myFiles = this.Files; //save selected files to the array
            console.log(myFiles); //show them on console
        }).click();
    });
















})