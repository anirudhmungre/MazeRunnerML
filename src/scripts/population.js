class Population{
    constructor(size){
        this.entities = []
        for (let i = 0; i < size; i++){
            this.entities.push(new Entity())
        }
    }

    show(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].show()
        }
    }

    update(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].update()
        }
    }
}