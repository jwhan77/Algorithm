angle = 0
magical_power = 0

gururin_commands = input("")
for rotate in gururin_commands:
    if rotate == "R":
        angle += 90
    elif rotate == "L":
        angle -= 90

    if angle == 360:
        magical_power += 1
        angle = 0
    elif angle == -360:
        angle = 0

print(magical_power)