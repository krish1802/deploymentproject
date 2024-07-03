//legs exercises

//squats
document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".squats").style.display = "none";
    }
});

squats.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".squats").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".squats").scrollIntoView({ 
        behavior: 'smooth' 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".bulgarianSplits").style.display = "none";
    }
});

bulgarianSplits.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".bulgarianSplits").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".bulgarianSplits").scrollIntoView({ 
        behavior: 'smooth' 
    });
});
//legs extensions
// document.addEventListener("DOMContentLoaded", function() {
//     // Check if the page is being refreshed
//     if (performance.navigation.type === 1) {
//         // Hide the .chestPress div
//         document.querySelector(".legsExtenions").style.display = "none";
//     }
// });

// legsExtensions.addEventListener("click", async () => {
//     // Show right2 and hide right1
//     document.querySelector(".legsExtensions").style.display = "block";
//     document.querySelector(".gallery-area").style.display = "none";

//     // Scroll to a specific element
//     document.querySelector(".legsExtensions").scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });

//hamstring extensions
document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".hamstringExtensions").style.display = "none";
    }
});

// hamstringExtensions.addEventListener("click", async () => {
//     // Show right2 and hide right1
//     document.querySelector(".hamstringExtensions").style.display = "block";
//     document.querySelector(".gallery-area").style.display = "none";

//     // Scroll to a specific element
//     document.querySelector(".hamstringExtensions").scrollIntoView({ 
//         behavior: 'smooth' 
//     });
// });

//lunges
document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".lunges").style.display = "none";
    }
});

lunges.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".lunges").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".lunges").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

//romanian deadlift
document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".romanianDeadlift").style.display = "none";
    }
});

romanianDeadlift.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".romanianDeadlift").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".romanianDeadlift").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

backBtnSquats.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".squats").style.display = "none";
})

backBtnBulgarian.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".bulgarianSplits").style.display = "none";
});

backBtnLegsextensions.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".legsExtensions").style.display = "none";
})

backBtnHamstring.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".hamstringExtensions").style.display = "none";
})

backBtnLunges.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".lunges").style.display = "none";
})

backBtnRomanian.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".romanianDeadlift").style.display = "none";
})