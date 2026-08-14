const unlockButton = document.getElementById("unlockButton");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const container = document.querySelector(".container");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const memoryScreen = document.getElementById("memoryScreen");
const heartSlots = document.querySelectorAll(".heartSlot");
const memoryImage = document.getElementById("memoryImage");
const imageViewer = document.getElementById("imageViewer");
const fullImage = document.getElementById("fullImage");
const closeViewer = document.getElementById("closeViewer");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");
const transitionSound = document.getElementById("transitionSound");
const openLetterBtn = document.getElementById("openLetterBtn");
const finishBtn = document.getElementById("finishBtn");
const replayBtn = document.getElementById("replayBtn");
const memoryQuote = document.getElementById("memoryQuote");
const cakeScreen = document.getElementById("cakeScreen");
const memoryCount = document.getElementById("memoryCount");
const progressFill = document.getElementById("progressFill");
const nextBtn = document.getElementById("nextBtn");
const replayStoryBtn = document.getElementById("replayStoryBtn");
const prevBtn = document.getElementById("prevBtn");
const memoryTitle = document.getElementById("memoryTitle");
const beginJourney = document.getElementById("beginJourney");
const imageLoader = document.getElementById("imageLoader");
const memorySubtitle = document.getElementById("memorySubtitle");
const chapterScreen = document.getElementById("chapterScreen");
const chapterTitle = document.getElementById("chapterTitle");
const chapterSubtitle = document.getElementById("chapterSubtitle");
const giftScreen = document.getElementById("giftScreen");
const openGiftBtn = document.getElementById("openGiftBtn");
const heartsContainer = document.getElementById("loadingHearts");
const storyBar = document.getElementById("storyBar");
const giftBox = document.getElementById("giftBox");
const giftLid = document.getElementById("giftLid");
const friendAge = document.getElementById("friendAge");
const introStory = document.getElementById("introStory");
const storyLine = document.getElementById("storyLine");
const thankYouScreen = document.getElementById("thankYouScreen");
const creditsScreen=document.getElementById("creditsScreen");
const friendText=document.getElementById("friendText");
const promiseScreen=document.getElementById("promiseScreen");
const promiseText=document.getElementById("promiseText");
const promiseReplayBtn=document.getElementById("promiseReplayBtn");
const promiseNextBtn = document.getElementById("promiseNextBtn");
const heartDisplay = document.getElementById("heartDisplay");
const wrongPasswordPopup = document.getElementById("wrongPasswordPopup");
const wrongSound = new Audio("music/oops.mp3");
wrongSound.volume = 0.6;
const typingSound = new Audio("music/typing.mp3");
typingSound.loop = true;
typingSound.volume = 0.25; // Adjust from 0.1 to 1.0
const thankYouVoice = new Audio("music/thankyou_final.mp3");
thankYouVoice.volume = 1.0;
const thankMessageText = `Hi, Shobana. ❤️
Happy Birthday to you. 🎂✨
Thank you for being such an amazing friend.
No matter the distance, you're always precious.
Have a truly special day and take care. 💖`;

let words = [];
let wordIndex = 0;

function showThankWords() {

    if (wordIndex === 0) {
        words = thankMessageText.split(" ");
        thankMessage.innerHTML = "";
    }

    if (wordIndex < words.length) {

        thankMessage.innerHTML += words[wordIndex] + " ";

        wordIndex++;

        setTimeout(showThankWords, 400);  // Adjust speed here

    }

}
memoryImage.addEventListener("click", function () {
    fullImage.src = memoryImage.src;

    imageViewer.style.display = "flex";

setTimeout(() => {

    imageViewer.style.opacity = "1";

    fullImage.style.transform = "scale(1)";

},20);

});
closeViewer.addEventListener("click", function () {

    imageViewer.style.opacity = "0";

fullImage.style.transform = "scale(.8)";

setTimeout(() => {

    imageViewer.style.display = "none";

},300);

});
imageViewer.addEventListener("click", function (e) {

    if (e.target === imageViewer) {

        imageViewer.style.display = "none";

    }

});



unlockButton.addEventListener("click", function () {

    if (password.value === "1508") {
        container.style.display = "none";
        loadingScreen.style.display = "flex";
        bgMusic.volume = 0.4;

bgMusic.play().then(() => {
    musicToggle.innerHTML = "🔊";
}).catch(err => {
    console.log("Music failed:", err);
});
        const loadingMessages=[

"Collecting beautiful memories 💕",

"Wrapping your surprise 🎁",

"Adding love and smiles 😊",

"Decorating with hearts ❤️",

"Making today unforgettable ✨",

"Almost ready... 💖"

];

let loadIndex=0;

setInterval(function(){

    const text=document.getElementById("loadingText");

    if(text){

        text.textContent=loadingMessages[loadIndex];

        loadIndex=(loadIndex+1)%loadingMessages.length;

    }

},1000);

let progress=0;

const progressBar=document.getElementById("loadingProgress");

const progressInterval=setInterval(function(){

    progress+=2;

    if(progressBar){

        progressBar.style.width=progress+"%";

    }

    if(progress>=100){

        clearInterval(progressInterval);

    }

},80);

setInterval(function(){

    const heart=document.createElement("div");

    heart.className="loadingHeart";

    heart.innerHTML=["💖","💕","💗","🌸"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(5+Math.random()*3)+"s";

    

if (heartsContainer) {
    heartsContainer.appendChild(heart);
}

    setTimeout(()=>heart.remove(),12000);

},120);
console.log({
    container,
    loadingScreen,
    welcomeScreen,
    heartsContainer
});
setTimeout(function () {
    playTransition();
    console.log("Timer finished");

    console.log(loadingScreen);
    console.log(welcomeScreen);

loadingScreen.style.display = "none";

cakeScreen.style.display = "flex";

setTimeout(function(){

    document.getElementById("candles").innerHTML = "💨 💨 💨";

},3000);

setTimeout(function(){

    cakeScreen.style.display="none";

    welcomeScreen.style.display="flex";

},5000);

}, 3000);


    } else {

        errorMessage.style.color = "red";
        errorMessage.textContent =
            "❌ Incorrect Password. Hint: SOLLA MATANE";

    }

});
/* ===========================
   MEMORY DATA
=========================== */

const memories = [

{
image:"images/photo1.jpg",
title:"First Picture Together",
quote:"Every unforgettable friendship has a first memory. This was ours pic. ❤️"
},

{
image:"images/photo2.jpg",
title:"Random Meet",
quote:"Some moments become memories without us even realizing it.❤️"
},

{
image:"images/photo3.jpg",
title:"Beautiful Day",
quote:"Every picture tells a story, and every story brings a smile.😉"
},


{
image:"images/photo4.jpg",
title:"Life's Brighter Side",
quote:"Life becomes brighter when shared with good friends.😍"
},

{
image:"images/photo5.jpg",
title:"Beautiful Memories",
quote:"Beautiful memories are life's greatest treasures.❤️‍🔥"
},

{
image:"images/photo6.jpg",
title:"Lasting Impressions",
quote:"Some days may pass, but memories stay forever.💚"
},

{
image:"images/photo7.jpg",
title:"Friendship",
quote:"Friendship is built through countless little moments.💕"
},
{
image:"images/photo8.jpg",
title:"Cherished Moments",
quote:"The best memories are made with the best people. 💕"
},
{
    image:"images/photo9.jpg",
    title:"Golden Moments",
    quote:"Every smile tells a beautiful story. ✨"
},
{
    image:"images/photo10.jpg",
    title:"Forever Smiling",
    quote:"Some moments deserve to be remembered forever. 😊"
},
{
    image:"images/photo11.jpg",
    title:"Picture Perfect",
    quote:"A snapshot filled with happiness and love. 📸"
},
{
    image:"images/photo12.jpg",
    title:"Pure Happiness",
    quote:"The happiest memories are made together. 💕"
},
{
    image:"images/photo13.jpg",
    title:"Sweet Memories",
    quote:"Time passes, but beautiful memories remain. 🌸"
},
{
    image:"images/photo14.jpg",
    title:"Special Moments",
    quote:"Every picture holds a piece of our journey. ❤️"
},
{
    image:"images/photo15.jpg",
    title:"Outdoor Vibes",
    quote:"Smiles become brighter when we're together. 🎂"
},
{
    image:"images/photo16.jpg",
    title:"Cherished Times",
    quote:"These are the moments we'll always treasure. 🌷"
},
{
    image:"images/photo17.jpg",
    title:"Joyful Journey",
    quote:"Another page in our beautiful friendship. 🌈"
},
{
    image:"images/photo18.jpg",
    title:"Heartwarming Memories",
    quote:"Life is more colorful with wonderful friends. 💖"
},
{
    image:"images/photo19.jpg",
    title:"A Beautiful Day",
    quote:"Some memories never fade away. 🌼"
},
{
    image:"images/photo20.jpg",
    title:"Unforgettable Smiles",
    quote:"Laughter is the best memory maker. 😄"
},
{
    image:"images/photo21.jpg",
    title:"Endless Happiness",
    quote:"Every chapter with you is my favorite one. 🌟"
},
{
    image:"images/photo22.jpg",
    title:"Magical Moments",
    quote:"Friendship makes every moment magical. ✨"
},
{
    image:"images/photo23.jpg",
    title:"Together Always",
    quote:"The best stories are written together. 🥰"
},
{
    image:"images/photo24.jpg",
    title:"Blooming Memories",
    quote:"Like flowers, beautiful memories bloom forever. 🌹"
},
{
    image:"images/photo25.jpg",
    title:"The Best Chapter",
    quote:"Every memory adds a new chapter to our story. 📖"
},
{
    image:"images/photo26.jpg",
    title:"Precious Bond",
    quote:"Some friendships are truly priceless. 💝"
},
{
    image:"images/photo27.jpg",
    title:"Almost There",
    quote:"Our memory journey is almost complete. 🎈"
},
{
    image:"images/photo28.jpg",
    title:"The Final Memory",
    quote:"Happy Birthday, Shobana! May your smile always shine this brightly. 🎂❤️"
}

];
let currentMemory = 0;

function showMemory(index) {
    if(index === 7){

    showChapter(
        "🌸 Chapter 2",
        "Beautiful Days"
    );

}

if(index === 14){

    showChapter(
        "😊 Chapter 3",
        "Endless Smiles"
    );

}

if(index === 21){

    showChapter(
        "🎂 Chapter 4",
        "Birthday Celebration"
    );

}


    memoryImage.style.opacity = 0;

    setTimeout(function () {

    memoryImage.style.transform="scale(.92)";

    memoryImage.style.opacity=0;

    setTimeout(function () {

    memoryImage.style.opacity = "0";
    memoryQuote.style.opacity = "0";

setTimeout(function(){

    memoryImage.src = memories[index].image;
    createMemorySparkles();
    const percent = ((index + 1) / memories.length) * 100;

    storyBar.style.width = percent + "%";
    //memoryQuote.innerHTML = memories[index].quote;

    memoryImage.style.animation = "none";
    memoryImage.offsetHeight;
    memoryImage.style.animation = "photoZoom 8s linear forwards";

    memoryImage.style.opacity = "1";
    memoryQuote.style.opacity = "1";

},400);
    memoryImage.style.animation = "none";
    memoryImage.offsetHeight;
    memoryImage.style.animation = "photoZoom 8s linear forwards";
    const wrapper = document.getElementById("memoryWrapper");

wrapper.classList.remove("showGlow");

setTimeout(() => {
    wrapper.classList.add("showGlow");
}, 80);
    memoryTitle.textContent = memories[index].title;

    memorySubtitle.textContent = memories[index].subtitle;

    memoryImage.onload = function () {

        memoryImage.style.opacity = "1";
        memoryImage.style.transform = "scale(1)";

    };

}, 250);

    typeWriter(memoryQuote,memories[index].quote,10);
    memoryCount.style.opacity = 0;

setTimeout(function(){

    memoryCount.textContent =
    "Memory " + (index + 1) + " of " + memories.length;
    const chapterName = document.getElementById("chapterName");

if(index <= 6){

    chapterName.textContent = "🌸 Chapter 1 • The Beginning";

}else if(index <= 13){

    chapterName.textContent = "🌈 Chapter 2 • Beautiful Days";
}else if(index <= 20){

    chapterName.textContent = "😊 Chapter 3 • Endless Smiles";

}else{

    chapterName.textContent = "🎂 Chapter 4 • Birthday Celebration";

}

    memoryCount.style.opacity = 1;

},150);
            const progress = ((index + 1) / memories.length) * 100;

        progressFill.style.width = progress + "%";

        memoryImage.style.opacity = 1;
        imageLoader.style.display = "none";

    }, 250);

}
beginJourney.addEventListener("click", function () {
    playTransition();
    welcomeScreen.style.display = "none";

    introStory.style.display = "flex";

    const lines = [

        "🌸 Every memory has a story...",

        "❤️ Every story has a special person...",

        "🎂 Today is all about you, Shobana.",

        "✨ Let's begin our beautiful journey..."

    ];

    let index = 0;

    function showNextLine(){

        storyLine.classList.remove("show");

        setTimeout(function(){

            storyLine.textContent = lines[index];

            storyLine.classList.add("show");

            index++;

            if(index < lines.length){

                setTimeout(showNextLine,2500);

            }else{

                setTimeout(function(){
                    playTransition();
                    introStory.style.display = "none";

                    memoryScreen.style.display = "flex";

                    currentMemory = 0;

                    showMemory(currentMemory);

                },2500);

            }

        },300);

    }

    showNextLine();

});
function playTransition() {

    transitionSound.currentTime = 0;

    transitionSound.play().catch(() => {});

}
nextBtn.addEventListener("click", function () {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        showMemory(currentMemory);

    } else {
        playTransition();
        memoryScreen.style.display = "none";

        memoryCompleteScreen.style.display = "flex";

setTimeout(function(){
    playTransition();
    memoryCompleteScreen.style.display = "none";

    giftScreen.style.display = "flex";

},3000);


    }

});
prevBtn.addEventListener("click", function () {

    if (currentMemory > 0) {

        currentMemory--;

        showMemory(currentMemory);

    }

});

// letter.classList.add("show");

finishBtn.addEventListener("click", function () {

    letterScreen.style.display = "none";
    console.log("Finish button clicked");
    // Calculate age
function updateAge() {

    const birthDate = new Date(2003, 7, 15, 0, 0, 0); // 15 Aug 2003 12:00 AM

    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    friendAge.innerHTML = `
🎂 ${years} Years<br>
📅 ${months} Months<br>
🌸 ${days} Days<br>
⏰ ${hours} Hours<br>
🕒 ${minutes} Minutes<br>
⏱️ ${seconds} Seconds
`;

}

updateAge();

setInterval(updateAge, 1000);
    playTransition();
    // Show Final Screen immediately
    updateAge();
    finalScreen.style.display = "flex";

    // After 8 seconds, show Thank You screen
    setTimeout(function () {
        playTransition();
        finalScreen.style.display = "flex";
        confetti({
            particleCount: 300,
            spread: 180
        });
        thankYouScreen.style.display = "flex";
        wordIndex = 0;
        showThankWords();
        thankYouVoice.currentTime = 0;
        thankYouVoice.play().catch(() => {});
        setTimeout(function(){

            thankYouScreen.style.display = "none";

            showPromise();

        },12000);
        // 🎉 Confetti
        
        
        const duration = 4000;
        const animationEnd = Date.now() + duration;

        const interval = setInterval(function () {

            if (Date.now() > animationEnd) {
                clearInterval(interval);
                return;
            }
            console.log("Starting confetti");
            confetti({
                particleCount: 30,
                angle: 60,
                spread: 70,
                origin: { x: 0 }
            });

            confetti({
                particleCount: 30,
                angle: 120,
                spread: 70,
                origin: { x: 1 }
            });

        }, 250);

        // Age Counter
        updateAge();
        setInterval(updateAge, 1000);

        

    }, 8000);

});

replayBtn.addEventListener("click", function(){

    currentMemory = 0;

    showMemory(currentMemory);
    playTransition();
    finalScreen.style.display = "none";
    memoryScreen.style.display = "flex";

});
giftBox.addEventListener("click", function(){

    giftLid.style.transform =
    "rotate(-35deg) translateY(-25px)";

    setTimeout(function(){
        playTransition();
        giftScreen.style.display = "none";

        letterScreen.style.display = "flex";

    },900);

});
const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.animationDuration =
    (8 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 450);
const sparkles = document.getElementById("sparkles");

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDuration=
    (2+Math.random()*2)+"s";

    sparkles.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },4000);

}

setInterval(createSparkle,250);
let touchStartX = 0;
let touchEndX = 0;

memoryImage.addEventListener("touchstart", function (e) {

    touchStartX = e.changedTouches[0].screenX;

});

memoryImage.addEventListener("touchend", function (e) {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe() {

    // Swipe Left → Next
    if (touchStartX - touchEndX > 50) {

        if (currentMemory < memories.length - 1) {

            currentMemory++;

            showMemory(currentMemory);

        }

    }

    // Swipe Right → Previous
    else if (touchEndX - touchStartX > 50) {

        if (currentMemory > 0) {

            currentMemory--;

            showMemory(currentMemory);

        }

    }

}
musicToggle.addEventListener("click", function(){

    if(bgMusic.paused){

        bgMusic.play();

        musicToggle.innerHTML = "🔊";

    }else{

        bgMusic.pause();

        musicToggle.innerHTML = "🔇";

    }

});
// Open image in full screen
memoryImage.addEventListener("click", function () {
    playTransition();
    fullImage.src = memoryImage.src;
    imageViewer.style.display = "flex";
});

// Close viewer
closeViewer.addEventListener("click", function () {
    playTransition();
    imageViewer.style.display = "none";
});

// Close when tapping outside the image
imageViewer.addEventListener("click", function (e) {
    if (e.target === imageViewer) {
        playTransition();
        imageViewer.style.display = "none";
    }
});
let startY = 0;

imageViewer.addEventListener("touchstart", function (e) {
    startY = e.touches[0].clientY;
});

imageViewer.addEventListener("touchend", function (e) {
    let endY = e.changedTouches[0].clientY;

    if (endY - startY > 100) {
        imageViewer.style.display = "none";
    }
});
document.addEventListener("mousemove", function(e){

    const x = (window.innerWidth/2 - e.clientX)/40;

    const y = (window.innerHeight/2 - e.clientY)/40;

    document.body.style.backgroundPosition =
    `${x}px ${y}px`;

});

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", function () {

        envelope.style.transform = "scale(.9) rotateX(20deg)";
        envelope.style.opacity = "0";

        setTimeout(function(){

            envelope.style.display = "none";

            const letter = document.getElementById("letterContent");

            letter.style.display = "block";

            setTimeout(function(){

                letter.classList.add("show");

                const birthdayLetter =
                document.getElementById("birthdayLetter");

                const message = `Dear Shobana,

Happy Birthday! 🎂❤️

Today is all about celebrating the wonderful person you are.

May your life always be filled with happiness, success, good health, endless smiles, and unforgettable memories.

Thank you for being such a wonderful friend.

Keep smiling...
Keep shining...
Keep being amazing...

🎉 Happy Birthday Once Again! 🎉

— With Best Wishes ❤️`;

                typeWriter(birthdayLetter, message, 35);

            },50);

        },500);

    });

}
function showChapter(title, subtitle){
    playTransition();
    chapterTitle.textContent = title;
    chapterSubtitle.textContent = subtitle;

    chapterScreen.style.display = "flex";

    setTimeout(function(){

        chapterScreen.style.display = "none";

    },2000);

}
function showChapter(title, subtitle) {
    playTransition();
    chapterTitle.textContent = title;
    chapterSubtitle.textContent = subtitle;

    chapterScreen.style.display = "flex";

    setTimeout(() => {
        chapterScreen.style.display = "none";
    }, 2000);

}
function typeWriter(element, text, speed) {
    clearTimeout(element.typingTimer);
    element.innerHTML = "";
    let i = 0;

    function type() {

        if (i < text.length) {

            element.innerHTML = text.substring(0, i + 1);
            i++;
            element.typingTimer = setTimeout(type, speed);

        } else {

            // Show Next button after typing finishes
            document.getElementById("promiseNextBtn").style.display = "inline-block";

        }

    }

    type();

}
const pinButtons = document.querySelectorAll(".pinBtn");

pinButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const value = button.textContent;

        if(value === "⌫"){

            password.value = password.value.slice(0,-1);
            heartSlots[password.value.length].textContent = "♡";

        }
        else if(value !== "*"){

            if(password.value.length < 4){

                password.value += value;
                heartSlots[password.value.length - 1].textContent = "❤️";

            }

            if(password.value.length === 4){

                if(password.value === "1508"){

                    setTimeout(function(){

                        unlockButton.click();

                    },300);

                }
               else{

    heartDisplay.classList.remove("shake");
    void heartDisplay.offsetWidth; // Restart animation
    heartDisplay.classList.add("shake");

    wrongPasswordPopup.classList.add("show");

    navigator.vibrate?.(200);

    wrongSound.currentTime = 0;
    wrongSound.play();

    // Show broken hearts
    heartSlots.forEach(function(slot){

        slot.textContent = "💔";
        slot.classList.add("breakHeart");

        setTimeout(function(){
            slot.classList.remove("breakHeart");
        },500);

    });

    password.value = "";

    // Restore empty hearts after 700ms
    setTimeout(function(){

        heartSlots.forEach(function(slot){
            slot.textContent = "♡";
        });

    },700);

    // Hide popup after 2 seconds
    setTimeout(function(){

        heartDisplay.classList.remove("shake");
        wrongPasswordPopup.classList.remove("show");

    },2000);

}
            }
        }
    });
});
const messages = [

"❤️ Forever Friends",

"🌸 Happy Birthday",

"😊 Best Memories",

"💖 You Are Amazing",

"✨ Stay Happy",

"🎂 Birthday Girl",

"🌹 Thank You",

"🥰 Endless Smiles"

];

function createFloatingMessage(){

    const container = document.getElementById("floatingMessages");

    if(!container) return;

    const text = document.createElement("div");

    text.className = "floatText";

    text.textContent =
    messages[Math.floor(Math.random()*messages.length)];

    text.style.left =
    Math.random()*80 + 10 + "%";

    text.style.top =
    Math.random()*70 + 20 + "%";

    container.appendChild(text);

    setTimeout(function(){

        text.remove();

    },6000);

}

setInterval(createFloatingMessage,2500);
const balloons = document.getElementById("balloons");

function createBalloon(){

    if(!balloons) return;

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const colors = [
        "#ff4b9b",
        "#ff9800",
        "#00c853",
        "#03a9f4",
        "#9c27b0",
        "#ffeb3b"
    ];

    balloon.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    balloon.style.left = Math.random()*100 + "vw";

    balloon.style.animationDuration =
        (8 + Math.random()*5) + "s";

    balloon.style.transform =
        "scale(" + (0.8 + Math.random()*0.5) + ")";

    balloons.appendChild(balloon);

    setTimeout(function(){
        balloon.remove();
    },13000);
}

setInterval(createBalloon,1200);
const petals = document.getElementById("petals");

function createPetal(){

    if(!petals) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    const flowers = ["🌸","🌺","💮","🌼"];

    petal.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize =
        (18 + Math.random()*18) + "px";

    petal.style.animationDuration =
        (8 + Math.random()*5) + "s";

    petals.appendChild(petal);

    setTimeout(function(){
        petal.remove();
    },13000);

}

setInterval(createPetal,900);


function createPetal(){

    if(!petals) return;

    const petal = document.createElement("div");

    petal.className="petal";

    const flowers=["🌸","💮","🌺"];

    petal.innerHTML=
        flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=
        (18+Math.random()*18)+"px";

    petal.style.animationDuration=
        (9+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },14000);

}

setInterval(createPetal,900);
const scrollUpBtn = document.getElementById("scrollUpBtn");
const scrollDownBtn = document.getElementById("scrollDownBtn");

scrollUpBtn.onclick = function () {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth"
    });
};

scrollDownBtn.onclick = function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
};


function showCredits(){

creditsScreen.style.display="flex";

const name="DHIVAKAR S";

const container=document.getElementById("nameContainer");

container.innerHTML="";

const letters=name.split("");

letters.forEach((letter,index)=>{

const span=document.createElement("span");

span.className="name-letter";

span.innerHTML=(letter===" ")?"&nbsp;":letter;

container.appendChild(span);

setTimeout(()=>{

span.style.animation="fall .7s ease forwards";

},index*600);

});

setTimeout(() => {

    friendText.style.animation = "fadeIn 2s forwards";

}, letters.length * 1000 + 1000);

// Wait until the full credits animation finishes


}


const promiseMessage = `Dear Shobana ❤️

On this beautiful birthday,

I just want to make a simple promise...

No matter how busy life becomes,

No matter how many years pass,

No matter how far the distance is,

Our friendship will always remain
precious and unforgettable.

Thank you for every smile,
every laugh,
and every beautiful memory
that we have shared together.

May your life always be filled with
happiness,
success,
good health,
and endless smiles.

Never stop believing in yourself,
because you are truly amazing.

__BEST_FRIENDS_FOREVER__

With lots of love,

DHIVAKAR S ❤️`;

function showPromise() {
    playTransition();
    creditsScreen.style.display = "none";
    promiseScreen.style.display = "flex";
    promiseScreen.scrollTop = 0;
    promiseText.innerHTML = "";
    typingSound.currentTime = 0;
    typingSound.play().catch(() => {});
    promiseNextBtn.style.display = "none";
    console.log(promiseMessage);
    console.log(promiseMessage.length);
    let i = 0;

    function type() {

        if (i < promiseMessage.length) {

            promiseText.textContent += promiseMessage.charAt(i);

            const isNearBottom = promiseScreen.scrollTop + promiseScreen.clientHeight >= promiseScreen.scrollHeight - 30;
            if (isNearBottom) {
                promiseScreen.scrollTo({
                    top: promiseScreen.scrollHeight,
                    behavior: "smooth"
                });
            }

            i++;

            setTimeout(type, 40);

        }else{

            typingSound.pause();
            typingSound.currentTime = 0;

            promiseText.innerHTML = promiseText.innerHTML.replace(
                /__BEST_FRIENDS_FOREVER__/g,
                '<span class="promise-signoff"> Best Friends Forever </span>'
            );

            promiseNextBtn.style.display = "inline-block";

        }

    }

    type();

}


if (promiseReplayBtn) {
    promiseReplayBtn.onclick = function () {
        location.reload();
    };
}
promiseNextBtn.onclick = function () {

    promiseScreen.style.display = "none";

    showCredits();

};
function createMemorySparkles(){

const box=document.getElementById("memorySparkles");

for(let i=0;i<25;i++){

const s=document.createElement("div");

s.className="memorySparkle";

s.innerHTML=Math.random()>.5?"✨":"⭐";

s.style.left=Math.random()*100+"vw";

s.style.top=(40+Math.random()*25)+"vh";

s.style.animationDelay=Math.random()*.3+"s";

box.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

}

}
document.getElementById("promiseNextBtn").onclick = function () {

    promiseScreen.style.display = "none";

    showCredits();

};
if(replayStoryBtn){

    replayStoryBtn.onclick=function(){

        if(confirm("💖 Would you like to relive our beautiful journey once again?")){

            location.reload();

        }

    };

}