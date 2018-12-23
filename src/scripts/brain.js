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
}