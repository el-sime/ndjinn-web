class Entity {
    name: string;
    components: Component[] = [];
    isActive: boolean = true;
    isVisible: boolean = false;

    constructor(name: string) {
        this.name = name;
    }
}