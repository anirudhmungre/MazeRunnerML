class Entity{
    constructor(gen){
        this.brain = new Brain()
        this.dead = false
        this.reachedGoal = false
        this.isBest = false

        this.pos = createVector(windowWidth/2, windowHeight - 100 - footOffset)
        this.vel = createVector()
        this.acc = createVector()

        this.fitness = 0
        this.gen = gen
    }

    show(){

        let theta = this.vel.heading() + radians(90)
        if (this.isBest){
            fill(0, 180, 0)
        }
        else{
            fill(175, 23, 23)
        }
        stroke(200)
        push()
        translate(this.pos.x,this.pos.y)
        rotate(theta)
        beginShape()
        vertex(0, -8)
        vertex(-4, 8)
        vertex(4, 8)
        endShape(CLOSE)
        pop()
    }

    run(){
        if (this.gen > 0){
            if (this.brain.step < this.brain.dir.length){
                this.acc = this.brain.dir[this.brain.step]
                this.brain.step++
            }
            else{
                this.acc = this.brain.randDir()
            }
        }
        else{
            this.acc = this.brain.randDir()
        }

        this.vel.add(this.acc)
        this.vel.limit(10)
        this.pos.add(this.vel)
    }

    update(){
        if (!this.dead && !this.reachedGoal){
            this.run()
            if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > windowWidth || this.pos.y > windowHeight - footOffset){
                this.dead = true
            }
            else if (dist(this.pos.x, this.pos.y, goal.pos.x, goal.pos.y) < goal.r){
                this.reachedGoal = true
            }
        }
    }

    calcFitness(){
        let disFromGoal
        if(this.reachedGoal){
            this.fitness = 1.0/16.0 + 10000.0/parseFloat(this.brain.step*this.brain.step)
        }
        else{
            disFromGoal = dist(this.pos.x, this.pos.y, goal.pos.x, goal.pos.y)
            this.fitness = 1.0/(disFromGoal*disFromGoal) // Make fitness even better for getting any steps closer thats why square
        }
    }
}