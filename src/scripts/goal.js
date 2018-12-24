class Goal{
    constructor(){
        this.pos = createVector(windowWidth/2, 80)
        this.r = 10
    }
    show(){
        fill(31, 255, 31)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }
}