class ndjinn {
    startTime: number = window.performance.now();
    isRunning: boolean = false;
    currentFrameId: number = 0;
    lastFrameTime: number = 0;
    Start():void {
        this.startTime = window.performance.now();
        this.lastFrameTime = 0;
        this.Run(null);
    }
    Stop():void {
        this.isRunning = false;
    }
    
    Run(frameId: Number | null): void {
        if (this.isRunning) {
            const frameTime = window.performance.now() - this.startTime;
            const deltaTime = (frameTime - this.lastFrameTime) 
        }
        this.Render();
        this.currentFrameId = window.requestAnimationFrame((frameId: number) => this.Run(frameId));
    }

    Update(deltaTime: number): void {
        console.log(deltaTime);
    }

    Render():void {
        return;
    }

    Destroy() :void {
        window.cancelAnimationFrame(this.currentFrameId);
    }
}