var population,
    goal,
    footOffset = 100

function setup(){
    createCanvas(windowWidth, windowHeight - footOffset)
    background(51)

    goal = new Goal()
    population = new Population(50)
}

function resizeWindow(){
    resizeCanvas(windowWidth, windowHeight - footOffset)
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
}