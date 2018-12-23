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
        clone.dir = this.dir
        return clone
    }

    mutate(){
        let mutateRate = 0.01,
            randAngle
        for(let i = 0; i < this.dir.length; i++){
            if (random < mutateRate){
                randAngle = random(2*PI)
                this.dir[i] = p5.Vector.fromAngle(randAngle)
            }
        }
    }
}