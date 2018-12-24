var population,
    goal,
    footOffset = 100,
    numEnt

function setup(){
    let myCanvas = createCanvas(windowWidth, windowHeight - footOffset)
    myCanvas.parent("myCanvas")
    interact()
    resetSketch()
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

function resetSketch(){
    numEnt = document.getElementById("numEntities").value    

    background(51)

    textAlign(CENTER)
    textSize(20)

    if(numEnt > 0){
        goal = new Goal()
        population = new Population(numEnt)
    }
}

function interact(){

    document.getElementById("resetSketch").onclick = resetSketch

    document.getElementById("killAll").onclick = function(){
        for(let i = 0; i < population.entities.length; i++){
            population.entities[i].dead = true
        }
    }
}