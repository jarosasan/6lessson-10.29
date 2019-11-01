//Form input field
//
const label = document.getElementById('sub-label');
const input = document.getElementById('field');

label.addEventListener("click", function () {
    label.classList.add("active");
    input.focus();
});

input.addEventListener("focusout",function () {
    label.classList.remove("active");
    input.value='';
});


//Countdown timer
const nextYear = (new Date().getFullYear()) + 1;

const countDownDate = new Date("Jan 01, "+ nextYear +", 00:00:01").getTime();

const timer = setInterval(function(){

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const day = document.getElementById('day').innerHTML = days;
    const hour = document.getElementById('hour').innerHTML = hours;
    const min = document.getElementById('min').innerHTML = minutes;
    const sec = document.getElementById('sec').innerHTML = seconds;

    // If the count down is finished, innerHTML = some tet

        if(distance < 0){

        }

}, 1000);


// Scroll to top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
