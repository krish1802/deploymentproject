

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".crunches").style.display = "none";
    }
});

crunches.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".crunches").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".crunches").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".reverseCrunches").style.display = "none";
    }
});

reverseCrunches.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".reverseCrunches").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".reverseCrunches").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".mountainClimbers").style.display = "none";
    }
});

mountainClimbers.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".mountainClimbers").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".mountainClimbers").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".legRaises").style.display = "none";
    }
});

legRaises.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".legRaises").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".legRaises").scrollIntoView({ 
        behavior: 'smooth' 
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".planks").style.display = "none";
    }
});

planks.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".planks").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".planks").scrollIntoView({ 
        behavior: 'smooth' 
    });
});



//back buttons

backBtnCrunches.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".crunches").style.display = "none";
});

backBtnReverse.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".reverseCrunches").style.display = "none";
});

backBtnMountain.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".mountainClimbers").style.display = "none";
});


backBtnLegraises.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".legRaises").style.display = "none";
})

backBtnPlanks.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".planks").style.display = "none";
})