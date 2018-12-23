class Entity{
    constructor(){
        this.brain = new Brain()
        this.dead = false
        this.reachedGoal = false

        this.pos = createVector(windowWidth/2, windowHeight - 100 - footOffset)
        this.vel = createVector()
        this.acc = createVector()
    }

    show(){
        let theta = this.vel.heading() + radians(90)
        fill(175, 23, 23)
        stroke(200)
        push()
        translate(this.pos.x,this.pos.y)
        rotate(theta)
        beginShape()
        vertex(0, -6)
        vertex(-3, 6)
        vertex(3, 6)
        endShape(CLOSE)
        pop()
    }

    run(){
        this.acc = this.brain.randDir()

        this.vel.add(this.acc)
        this.vel.limit(5)
        this.pos.add(this.vel)
    }

    update(){
        if (!this.dead){
            this.run()
            if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > windowWidth || this.pos.y > windowHeight - footOffset){
                this.dead = true
            }
            else if (dist(this.pos.x, this.pos.y, goal.pos.x, goal.pos.y) < goal.r){
                this.reachedGoal = true
                this.dead = true
            }
        }
    }
}