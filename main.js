song = "";
left_wristX = 0;
left_wristY = 0;
right_wristX = 0;
right_wristY = 0;
function preload(){
    song = loadSound("Enemy(PaglaSongs) (1).mp3");
}

function setup(){
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pose = ml5.poseNet(video,ModelReady);
    pose.on("pose",gotPoses);
}

function draw(){
     image(video,0,0,700,600);
}

function play(){
    song.play();
    song.rate(1.0);
    song.setVolume(1);
}

function ModelReady(){
console.log("Model is ready!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}

function gotPoses(results){
    if(results){
        console.log(results);
       left_wristX = results[0].pose.leftWrist.x;
       left_wristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x = " + left_wristX + " left wrist y = " + left_wristY);

        right_wristX = results[0].pose.rightWrist.x;
       right_wristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + right_wristX + " Right wrist y = " + right_wristY);
    }
}