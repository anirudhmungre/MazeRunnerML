class Goal{
    constructor(){
        this.pos = createVector(windowWidth/2, 20)
        this.r = 10
    }
    show(){
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }
}