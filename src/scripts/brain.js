class Brain{
    constructor(size){
        this.dir = []
        this.size = size
        this.step = 0
        this.randomize()
    }

    randomize(){
        let randAngle
        for (let i = 0; i < this.size; i++){
            randAngle = random(2*PI)
            this.dir[i] = p5.Vector.fromAngle(randAngle)
        }
    }
}