document.addEventListener('DOMContentLoaded', function () {
    const catAnimation = document.getElementById('cat-animation');
    if (!catAnimation) {
        console.error("Cat animation element not found!");
        return;
    }

    const totalFrames = 5;
    const frameHeight = 32;
    const animationDuration = 500; // Duration of animation in milliseconds
    const idleDuration = 5000; // Time between animations in milliseconds

    // Set the background image
    const imageUrl = `${window.location.origin}/images/cat-sprite.png`;
    catAnimation.style.backgroundImage = `url('${imageUrl}')`;
    catAnimation.style.backgroundPosition = '0px 0px';

    let currentFrame = 0;

    function animate() {
        console.log("Starting animation");
        let frameCount = 0;
        const animationInterval = setInterval(() => {
            currentFrame = (currentFrame + 1) % totalFrames;
            catAnimation.style.backgroundPosition = `0px -${currentFrame * frameHeight}px`;
            console.log("Animating frame:", currentFrame);
            frameCount++;
            if (frameCount >= totalFrames) {
                clearInterval(animationInterval);
                currentFrame = 0;
                catAnimation.style.backgroundPosition = '0px 0px';
                console.log("Animation complete");
            }
        }, animationDuration / totalFrames);
    }

    function scheduleNextAnimation() {
        console.log("Scheduling next animation");
        setTimeout(() => {
            animate();
            scheduleNextAnimation();
        }, idleDuration);
    }

    // Start the animation cycle
    scheduleNextAnimation();
});