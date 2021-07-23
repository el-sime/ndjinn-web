abstract class Component {
    abstract Update(deltaTime : number): void;
    abstract Render(): void; 
}