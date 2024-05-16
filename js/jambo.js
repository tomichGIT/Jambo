
var urls = ["./imgs/cancha-e1-2.jpg", "./imgs/huerto-e1-2.jpg", "./imgs/packaging-e1-2.jpg"]; // replace with your URLs
var currentIndex = 0;

// Preload Images
urls.forEach(function(url) {
    var img = new Image();
    img.src = url;
});

var bgImageMobile =document.querySelector("body.bgImages");
var bgImgageDesktop = document.querySelector(".DesktopHeader.bgImages");

var windowWidth = window.innerWidth;

// Run the First Time
if(windowWidth <= 768) {
    console.log("Mobile view");        
    changeBgImage(bgImageMobile);
} else {
    console.log("Desktop view");
    changeBgImage(bgImgageDesktop);
}

// Continue running every 5 seconds
setInterval(function () {
    if(windowWidth <= 768) {      
        changeBgImage(bgImageMobile);
    } else {
        changeBgImage(bgImgageDesktop);
    }
}, 5000); // change every 5 seconds


function changeBgImage(item){
    setTimeout(function () {
        console.log("Cambiando imagen", currentIndex, urls[currentIndex]);
        item.style.backgroundImage = "url('" + urls[currentIndex] + "')";
        currentIndex = (currentIndex + 1) % urls.length; // go to next URL
    }, 1000); // 1 second fade out, then change background
}


