import pygame as pg

pg.init()
screen = pg.display.set_mode((400, 300))
done = False
blue = 0
clock = pg.time.Clock()
fps = 30

while not done:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            done = True
    screen.fill((0, 0, blue))
    blue += 1
    pg.display.flip()
    clock.tick(fps)