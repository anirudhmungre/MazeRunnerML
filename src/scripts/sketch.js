var population,
    goal,
    footOffset = 100

function setup(){
    createCanvas(windowWidth, windowHeight - footOffset)
    background(51)

    goal = new Goal()
    population = new Population(100)
}

function resizeWindow(){
    resizeCanvas(windowWidth, windowHeight - footOffset)
}

function draw(){
    background(51)
    goal.show()
    population.update()
    population.show()
}