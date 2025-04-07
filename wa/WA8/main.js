const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Declaring the array of image filenames */
const images = ["images/img1.JPG","images/img2.JPG","images/img3.JPG","images/img4.JPG","images/img5.JPG"]

/* Declaring the alternative text for each image file */
const description = ["LILY","DANIELLE","AVA","KENNEDY","LILY AGAIN!"]

/* Looping through images */
for (let i=0; i<5; i++) {


const newImage = document.createElement('img');
newImage.setAttribute('src', images[i]);
newImage.setAttribute('alt', description[i]);
newImage.addEventListener('click', imagedclicked)
thumbBar.appendChild(newImage);
}
console.log(thumbBar)

function imagedclicked(event) {
    displayedImage.setAttribute('src', event.target.getAttribute('src'))
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'))
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changemode)

function changemode (event) {
    let myclass = event.target.getAttribute('class') 
    if(myclass == "dark") {
        btn.setAttribute('class', 'light')
        btn.textContent = "light";
        overlay.style.backgroundColor =  "rgb(0 0 0 / 50%)"
    }
    else{
        btn.setAttribute('class', 'dark')
        btn.textContent = "dark";
        overlay.style.backgroundColor =  "rgb(0 0 0 / 0%)"
    }

}
