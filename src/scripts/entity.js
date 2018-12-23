class Entity{
    constructor(){
        this.brain = new Brain(900)
        this.dead = false

        this.pos = createVector(windowWidth/2, windowHeight/2)
        this.vel = createVector()
        this.acc = createVector()
    }

    run(){
        if (this.brain.step < this.brain.dir.length){
            this.acc = this.brain.dir[this.brain.step]
            this.brain.step++
        }

        this.vel.add(this.acc)
        this.vel.limit(5)
        this.pos.add(this.vel)
    }

    update(){
        if (!this.dead){
            this.run()
        }
        if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > windowWidth || this.pos.y > windowHeight - footOffset){
            this.dead = true
        }
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
}