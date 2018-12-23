var population,
    footOffset = 100

function setup(){
    createCanvas(windowWidth, windowHeight - footOffset)
    background(51)

    population = new Population(100)
}

function resizeWindow(){
    resizeCanvas(windowWidth, windowHeight - footOffset)
}

function draw(){
    background(51)
    population.update()
    population.show()
}