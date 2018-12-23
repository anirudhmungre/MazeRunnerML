var population,
    goal,
    footOffset = 100

function setup(){
    createCanvas(windowWidth, windowHeight - footOffset)
    background(51)

    textAlign(CENTER)
    textSize(20)

    goal = new Goal()
    population = new Population(100)
}

function resizeWindow(){
    resizeCanvas(windowWidth, windowHeight - footOffset)
    this.goal.pos.x = windowWidth/2
}

function draw(){
    background(51)

    if (population.allDead()){
        population.calcFitness()
        population.natSelection()
        population.mutate()
    }
    else{
        goal.show()
        population.update()
        population.show()
    }
    noStroke()
    fill(255, 31, 31)
    text("Generation: " + population.gen + "\nMinimum Steps: " + population.minFin, windowWidth/2, 20)
}