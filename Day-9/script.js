const box = document.querySelectorAll('.box');
var bS = document.querySelector(".Booked-count");
var rS = document.querySelector(".Remaining-count");
var bookedSeats = 0;
var remainingSeats = 36;

bS.innerHTML = bookedSeats;
rS.innerHTML = remainingSeats;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            bookedSeats++;
            bS.innerHTML = bookedSeats;
            remainingSeats--;
            rS.innerHTML = remainingSeats;

        }
        else {
            e.target.classList.add('clicked');
            bookedSeats--;
            bS.innerHTML = bookedSeats;
            remainingSeats++;
            rS.innerHTML = remainingSeats;

        }
    });
}




