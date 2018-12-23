class Population{
    constructor(size){
        this.gen = 0
        this.entities = []
        for (let i = 0; i < size; i++){
            this.entities.push(new Entity(this.gen))
        }

        this.bestEntity
        this.minFin = Infinity
    }

    show(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].show()
        }
        this.entities[0].show()
    }

    update(){
        for(let i = 0; i < this.entities.length; i++){
            if(this.minFin < this.entities[i].brain.step){
                this.entities[i].dead = true
            }
            else{
                this.entities[i].update()
            }
        }
    }

    calcFitness(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].calcFitness() 
        }
    }

    allDead(){
        for(let i = 0; i < this.entities.length; i++){
            if (!this.entities[i].dead && !this.entities[i].reachedGoal){
                return false
            }
        }
        return true
    }

    natSelection(){
        this.gen++
        let newEntites = [],
            parent,
            fitnessSum = this.calcFitnessSum()
        this.setBest()
        newEntites[0] = this.getBaby(this.bestEntity)
        newEntites[0].isBest = true
        for(let i = 1; i < this.entities.length; i++){
            parent = this.getParent(fitnessSum)
            newEntites.push(this.getBaby(parent))
        }

        this.entities = newEntites
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

    getBaby(parent){
        let baby = new Entity(this.gen)
        baby.brain = parent.brain.clone()
        return baby
    }

    mutate(){
        for(let i = 1; i < this.entities.length; i++){
            this.entities[i].brain.mutate()
        }
    }

    setBest(){
        let max = 0
        for(let i = 0; i < this.entities.length; i++){
            if (this.entities[i].fitness > max){
                max = this.entities[i].fitness
                this.bestEntity = this.entities[i]
            }
        }
        if (this.bestEntity.reachedGoal){
            this.minFin = this.bestEntity.brain.step
        }
    }
}