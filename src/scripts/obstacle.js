class Obstacle{
    constructor(){
        this.w = random(10, windowWidth - 200)
        this.h = 20
        this.pos = createVector(random(20, windowWidth-this.w-20), random(goal.pos.y+20, windowHeight-footOffset-200))
    }
    
    show(){
        fill(56, 56, 209)
        rect(this.pos.x, this.pos.y, this.w, this.h)
    }

    intersects(entity){
        let top, left, right, bot
        bot = entity.pos.y < this.pos.y+this.h
        top = entity.pos.y > this.pos.y
        right = entity.pos.x < this.pos.x+this.w
        left = entity.pos.x > this.pos.x
        if (top && left && right && bot){
            return true
        }
        return false
    }
}