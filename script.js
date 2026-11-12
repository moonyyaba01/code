 // 1. TYPING ANIMATION
 
 const typingText=
 document.getElementById("typingText");

 const messages =[
    "Always learning somthing new"
    "Curios about technology"
    "Creating mu own journey"

 ]
 let messagesIndex = 0;
 let letterindex = 0;
 let deleting = 0;

 function typeEffect() {
    const currentMessage = messages[messagesIndex];
    
    if (!deleting) {
        typingText.textContent = 
                 currentMessage.substring(0,letterIndex + 1);
                 letterindex++;

                 if(letterIndex===currentMessage.length) {
                    deleting= true;
                    setTimeout(typeEffect, 1500);
                    return;
                 }
    } else {
        typingText.textContent = currentMessage.substring(0, letterIndex- 1);
        letterIndex--;
        if (letterIndex === 0) {
            deleting= false;
            messagesIndex = (messagesIndex+ 1)% messages.length;
        }
    }
    setTimeout(typeEffect, deleting ? 40 : 75);
    typeEffect();
    // 2. DARK MODE
const themeBtn =
document.getElementById("themeBtn");
themeBtn.addEvenListener("click",function() {
    document.body.classList.toggle("dark")) {
        themeBtn.textContent = "sun";} else {
        themeBtn.textContent = "moon";});
// 3.MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");

menuBtn.addEvenListener("click",function() {
    navlinks.classList.remove("open")
             menuBtn.textContent = "Menu";
     });
});
// 4. SCROLL REVEAL ANIMATION 
const observer = new
IntersectionObserver((entries)=>{entries.forEach(entry => {if (entry.isIntersecting) {
    entry.target.classList.add("visible");}
    });
} , {
    threshold: 0.15
});
document.querySelectAll(" .reveal").forEach(section => {
    observer.observe(section);
});
// 5. WELCOME MESSAGE

console.log("welcome to my digital space!");
console.log("keep learning. keep creating.");