import pygame as pg

pg.init()
sw = 700
sh = 700
screen = pg.display.set_mode((sw, sh))
done = False
blue = 0
clock = pg.time.Clock()
fps = 60

# Build the board
# goal = new Goal()

while not done:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            done = True

    ############################################ Fill Code
    screen.fill((0, 0, blue))
    blue += 1
    ############################################ Fill Code

    pg.display.flip()
    clock.tick(fps)