class EntityManager {
    entities: Entity[] = [];

    Update(deltaTime: number): void {
        this.entities.forEach( entity => {
            if(entity.isActive) {
                entity.components.forEach( component => {
                    component.Update(deltaTime);
                });
            }
        });
    }

    Render(): void {
        this.entities.forEach(entity => {
            if(entity.isVisible) {
                entity.components.forEach( component => {
                    component.Render();
                });
            }
        });
    }
}