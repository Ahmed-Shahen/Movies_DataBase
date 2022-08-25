var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var ageInput = document.getElementById('age');
var passwordInput = document.getElementById('password');
var rePasswordInput = document.getElementById('rePassword');


var movies = [];
async function getData(category) {

    let response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=9e28f9e2d434c458e0d54dcece62b147&language=en-US&page=1`);
    let result = await response.json();
    movies = result.results;
    displayData();
    console.log(result);
}

getData('now_playing')



function displayData() {

    cartoona = '';
    for (let i = 0; i < movies.length; i++) {
        cartoona +=
            `
        <div class="col-md-6 col-lg-4 my-3 shadow">
        <div class="movie shadow rounded position-relative">
            <div class="post">
                <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="img-fluid rounded w-100">
                <div class="layer d-flex align-items-center">
                    <div >
                        <h2>${movies[i].title}</h2>
                        <p>${movies[i].overview}</p>
                        <p>${movies[i].vote_average}</p>
                        <p>${movies[i].release_date}</p>
                    </div>

                </div>
                
            </div>
        </div>
        </div>
        `
    }

    document.getElementById('rowData').innerHTML = cartoona;
}

let lis = document.querySelectorAll('ul li');

for (i = 0; i < lis.length; i++) {


    lis[i].addEventListener('click', function (e) {

        if (e.target.innerHTML == "Top Rated") {
            getData('top_rated');
        }
        else if (e.target.innerHTML == "Now playing") {
            getData("now_playing");
        }
        else {
            getData(e.target.innerHTML)
        }

    })
}



function search(term) {

    var temp = "";

    for (i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(term.toLowerCase()) == true) {
            temp += `
            <div class="col-md-6 col-lg-4 my-3 shadow">
                <div class="movie shadow rounded position-relative">
                    <div class="post">
                        <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" class="img-fluid rounded w-100">
                        <div class="layer d-flex align-items-center">
                            <div >
                                <h2>${movies[i].title}</h2>
                                <p>${movies[i].overview}</p>
                                <p>${movies[i].vote_average}</p>
                                <p>${movies[i].release_date}</p>
                            </div>
    
                         </div>
                    
                    </div>
                </div>
            </div>`
        }
    }
    document.getElementById('res').innerHTML = temp;
}






// side Bar

$('#toggleBtn').click(() => {

    let menuBoxWidth = $('.nav-menu').outerWidth();
    if ($('.side-nav').css("left") == '0px') {
        $('.side-nav').animate({ left: `${menuBoxWidth}` }, 100)
        $('.nav-menu  li').animate({ opacity: '1' }, 50);
        $('.nav-menu  li').animate({ paddingTop: '25px' }, 1100);
    }
    else {
        $('.side-nav').animate({ left: `0` }, 100);
        $("nav-menu li").animate({ opacity: '0' }, 50);
        $("nav-menu li").animate({ paddingTop: '500px' });

    }
    $('.nav-menu').toggleClass('open');
    $(".toggel-menu i").toggleClass('fa-times')
})


// contact

function nameValidation() {
    var namealert = document.getElementById('namealert');

    var regex = /^[A-Za-z]{3,6}(\s?[A-Za-z]{3,8})?/;
    if (regex.test(nameInput.value) == true && nameInput.value != "") {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        namealert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        namealert.classList.replace("d-none", "d-block");
        return false;
    }
}

function emailValidation() {
    var emailalert = document.getElementById('emailalert');

    var regex = /@[a-zA-Z]{5,20}(\.com)$/;
    if (regex.test(emailInput.value) == true && emailInput.value != "") {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailalert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        emailalert.classList.replace("d-none", "d-block");
        return false;
    }
}

function ageValidation() {

    var agealert = document.getElementById('agealert');

    var regex = /^[1-8][0-9]|(90)$/;
    if (regex.test(ageInput.value) == true && ageInput.value != "") {
        ageInput.classList.add("is-valid");
        ageInput.classList.remove("is-invalid");
        agealert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        ageInput.classList.add("is-invalid");
        ageInput.classList.remove("is-valid");
        agealert.classList.replace("d-none", "d-block");
        return false;
    }
}

function phoneValidation() {

    var phonealert = document.getElementById('phonealert');

    var regex = /^01[0125][0-9]{7}$/;
    if (regex.test(phoneInput.value) == true && phoneInput.value != "") {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid");
        phonealert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        phoneInput.classList.add("is-invalid");
        phoneInput.classList.remove("is-valid");
        phonealert.classList.replace("d-none", "d-block");
        return false;
    }

}

function passwordValidation() {

    var passwordalert = document.getElementById('passwordalert');

    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(passwordInput.value) == true && passwordInput.value != "") {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordalert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        passwordalert.classList.replace("d-none", "d-block");
        return false;
    }
}

function repaswordValidation() {

    var repasswordalert = document.getElementById('repasswordalert');

    if (rePasswordInput.value == passwordInput.value) {
        rePasswordInput.classList.add("is-valid");
        rePasswordInput.classList.remove("is-invalid");
        repasswordalert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        rePasswordInput.classList.add("is-invalid");
        rePasswordInput.classList.remove("is-valid");
        repasswordalert.classList.replace("d-none", "d-block");
        return false;
    }
}


nameInput.addEventListener('keyup', () => {

    nameValidation();
});

emailInput.addEventListener('keyup', () => {

    emailValidation();
});

phoneInput.addEventListener('keyup', () => {

    phoneValidation();
});

ageInput.addEventListener('keyup', () => {

    ageValidation();
});

passwordInput.addEventListener('keyup', () => {

    passwordValidation();
});

rePasswordInput.addEventListener('keyup', () => {
    repaswordValidation();
});


