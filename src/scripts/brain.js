class Brain{
    constructor(){
        this.dir = []
        // this.size = size
        this.step = -1
    }

    randDir(){
        let randAngle
        randAngle = random(2*PI)
        this.dir.push(p5.Vector.fromAngle(randAngle))
        this.step++
        return this.dir[this.dir.length - 1]
    }

    clone(){
        let clone = new Brain()
        clone.dir = this.dir.slice()
        return clone
    }

    mutate(){
        let mutateRate = 0.05, // 5% chance a direction is mutated
            randAngle,
            rand
        for(let i = 0; i < this.dir.length; i++){
            rand = random(1)
            if (rand < mutateRate){
                randAngle = random(2*PI)
                this.dir[i] = p5.Vector.fromAngle(randAngle)
            }
        }
    }
}