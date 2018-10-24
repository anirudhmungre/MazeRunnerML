import pygame as pg

class Goal:
    def __init__(self, screen, x, y, r):
        pg.draw.circle(screen, (100, 0, 0), [x, y], r)