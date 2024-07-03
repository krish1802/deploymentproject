 // document.getElementById('uploadForm').addEventListener('submit', function(event) {
 //     document.getElementById('clickMessage').style.display = 'block';

 // });
                                
var i = 0;

function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 600);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
// move();
let formElement= document.getElementById('uploadForm');
let uploadBtn=document.getElementById('myBtn')
let progressBar=document.getElementById("myProgress");
let message=document.getElementById('clickMessage')
                                
                
document.getElementById("file").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const sizeInBytes = file.size;
    const videoUrl = URL.createObjectURL(file);
    const videoPreview = document.getElementById("videoPreview");
    const sizeInMB = sizeInBytes / (1024 * 1024);
    const p = document.getElementById("para");
                                    
                                    
    videoPreview.src = videoUrl;
    // videoPreview.style.display = "block";
    setTimeout(() => {
        if(videoPreview.duration>45 && sizeInMB>100){
            p.innerText="*Your video exceeds the time limit and size";

            formElement.addEventListener("submit", (event) => {
                if(p.innerText=="*Your video exceeds the time limit and size"){
                    event.preventDefault(); // Prevent the form from submitting
                    alert("Can't upload the video");
                    window.location.href = "/"; 
                }                   
            });
        } 
        else if(videoPreview.duration>45 && sizeInMB<=100){
            p.innerText="*Your video exceeds the time limit";
            
            formElement.addEventListener("submit", (event) => {
                if(p.innerText=="*Your video exceeds the time limit"){
                    event.preventDefault(); // Prevent the form from submitting
                    alert("Can't upload the video");
                    window.location.href = "/"; 
                }                   
            });
        } 
        else if(videoPreview.duration<=45 && sizeInMB>100){
            p.innerText="*Your video exceeds the size limit";

            formElement.addEventListener("submit", (event) => {
                if(p.innerText=="*Your video exceeds the size limit"){
                    event.preventDefault(); // Prevent the form from submitting
                    alert("Can't upload the video");
                    window.location.href = "/"; 
                }                   
            });
        }
        else if(videoPreview.duration<=45 && sizeInMB<=100){
            event.preventDefault()
            p.innerText="";
            formElement.action = "/upload"
            formElement.method = "post"
            formElement.enctype = "multipart/form-data"
            formElement.addEventListener("submit", ()=>{
                progressBar.style.display='block';
                message.style.display = 'block';
                move();
            })
        }
    }, 1000);
});
                            