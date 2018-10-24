import pygame as pg
from Goal import Goal

pg.init()
sw = 700
sh = 700
screen = pg.display.set_mode((sw, sh))
done = False
RED = (255, 0, 0)
BLUE = (0, 0, 255)
GREEN = (0, 255, 0)
clock = pg.time.Clock()
fps = 60

# Build the board
# pg.draw.circle(screen, (255, 0, 0), [100, 100], 300)

while not done:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            done = True

    ############################################ Fill Code
    screen.fill(BLUE)
    goal = Goal(screen, 100, 100, 10)
    ############################################ Fill Code

    pg.display.flip()
    clock.tick(fps)