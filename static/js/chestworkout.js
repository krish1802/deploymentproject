//chest exercises

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".chestPress").style.display = "none";
    }
});

benchPress.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".chestPress").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".chestPress").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".pushups").style.display = "none";
    }
});
pushup.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".pushups").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".pushups").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".chestDips").style.display = "none";
    }
});

chestDips.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".chestDips").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".chestDips").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".inclinedPushups").style.display = "none";
    }
});

inclinedPushups.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".inclinedPushups").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".inclinedPushups").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Hide the .chestPress div
        document.querySelector(".declinedPushups").style.display = "none";
    }
});

declinedPushups.addEventListener("click", async () => {
    // Show right2 and hide right1
    document.querySelector(".declinedPushups").style.display = "block";
    document.querySelector(".gallery-area").style.display = "none";

    // Scroll to a specific element
    document.querySelector(".declinedPushups").scrollIntoView({ 
        behavior: 'smooth' 
    });
});

//back buttons
backBtnChestpress.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".chestPress").style.display = "none";
})

backBtnPushups.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".pushups").style.display = "none";
})

backBtnChestdips.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".chestDips").style.display = "none";
});

backBtnInclined.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".inclinedPushups").style.display = "none";
})

backBtnDeclined.addEventListener("click", async () => {
    // Show right2 and hide right1
        document.querySelector(".gallery-area").style.display = "block";
        document.querySelector(".gallery-area").scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        document.querySelector(".declinedPushups").style.display = "none";
})

