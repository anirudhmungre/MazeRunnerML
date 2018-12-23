class Population{
    constructor(size){
        this.gen = 0
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

    calcFitness(){
        this.entities.forEach(entity => {
            entity.calcFitness() 
        })
    }

    allDead(){
        for(let i = 0; i < this.entities.length; i++){
            if (!this.entities[i].dead){
                return false
            }
        }
        return true
    }

    natSelection(){
        let newEntites = [],
            parent,
            fitnessSum = this.calcFitnessSum()
        for(let i = 0; i < this.entities.length; i++){
            parent = this.getParent(fitnessSum)
            newEntites.push(parent.getBaby())
        }

        this.entities = newEntites
        this.gen++
    }

    calcFitnessSum(){
        let fitnessSum = 0
        for(let i = 0; i < this.entities.length; i++){
            fitnessSum += this.entities[i].fitness
        }
        return fitnessSum
    }

    getParent(fitnessSum){
        let rand = random(0, fitnessSum)
        let fitLoc = 0
        for(let i = 0; i < this.entities.length; i++){
            fitLoc += this.entities[i].fitness
            if(fitLoc > rand){
                return this.entities[i]
            }  
        }
    }

    mutate(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].brain.mutate()
        }
    }
}