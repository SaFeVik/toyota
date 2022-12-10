// Henter det store bildet og alle små
let bigImage = document.querySelector('.hovedbilde')
let smallImages = document.querySelectorAll('.bilde')

// Gå gjennom alle de små bildene og legg til eventListener for hver
smallImages.forEach(function(image, index) {
    image.addEventListener('click', function() {
    // Tar bort klasse 'aktiv' fra det valgte lille bildet
    document.querySelector('.bilde.active').classList.remove('active')
    
    // Når du klikker på et lite bildet får det klassen 'aktiv'
    image.classList.add('active')

    // Overvåker hvor vi er i galleriet for at pilene skal starte der man er
    bildeNr = index
    
    // Oppdaterer bildesourcen til det store bildet
    bigImage.src = image.src
    });
});

let bildeNr = 0
// Lytt etter tastetrykk
document.addEventListener('keydown', function(event) {

    // Venstre pil trykkes
    if (event.keyCode === 37) {
        document.querySelector('.bilde.active').classList.remove('active')
        bildeNr = -- bildeNr
        if(bildeNr < 0){
            bildeNr = smallImages.length - 1
        }
        // Legger til klassen aktiv til lille bildet som er bildeNr i arrayen
        smallImages[bildeNr].classList.add('active')
        bigImage.src = smallImages[bildeNr].src

    }
    // Høyre pil trykkes
    if (event.keyCode === 39) {
        document.querySelector('.bilde.active').classList.remove('active')
        bildeNr = ++ bildeNr
        if(bildeNr > smallImages.length - 1){
            bildeNr = 0
        }
        // Legger til klassen aktiv til lille bildet som er bildeNr i arrayen
        smallImages[bildeNr].classList.add('active')
        bigImage.src = smallImages[bildeNr].src

    }
    })
