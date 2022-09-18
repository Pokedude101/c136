dstatus = "";

function setup(){
    canvas = createCanvas(380, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 280);
    video.hide();
}

function draw(){
    image(video, 0, 0, 380, 280);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
    wantedObject = document.getElementById("specific_object").value;
}

function modelloaded(){
    console.log("Model Has Loaded");  
    console.log(wantedObject);
    dstatus = true;
}