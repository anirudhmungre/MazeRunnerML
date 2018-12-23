class Goal{
    constructor(){
        this.pos = createVector(windowWidth/2, 20)
    }
    show(){
        fill(255)
        ellipse(this.pos.x, this.pos.y, 20, 20)
    }
}