console.log('lol');
let startTime = window.performance.now();
let currentFrameId = 0;
let lastFrameTime = 0;
let deltaTime = 0;
let isRunning = false;
let frameCount = 0;
let FPSTime = 0;
let FPS = 0;
let frameTime = 0;
let sumTime = 0;
function resetCounters() {
    currentFrameId = 0;
    lastFrameTime = 0;
    deltaTime = 0;
    frameCount = 0;
    FPSTime = 0;
    FPS = 0;
}

document.querySelector(".toggle").addEventListener("click", (e)=> {
    if(isRunning) {
        console.log("paused");
        e.target.innerText = "start";
        isRunning = false;
        pause();
        return;
    }
    console.log("starting...");
    e.target.innerText = "pause";
    isRunning = true;
    loop();
    return;
});

function loop(frameId) {
    if(!frameId){
        console.log("reset");
        resetCounters();
    }
    frameTime = window.performance.now() - startTime;
    deltaTime = ((frameTime - lastFrameTime) / 1000);
    lastFrameTime = frameTime;
    update(currentFrameId == 0 ? 0 : deltaTime);
    currentFrameId = window.requestAnimationFrame(loop);
    render();
}

function pause() {
    window.cancelAnimationFrame(currentFrameId);
}

function update(deltaTime) {
    frameCount++;
    sumTime += deltaTime;
    if (sumTime > 1) {
        FPS = frameCount;
        sumTime = 0;
        frameCount = 0;
    }

}

function render() {
    document.querySelector("span.fps").innerText = FPS;
}