def make_bricks(small, big, goal):
    rem = goal - 5 * min( (goal//5), big )
    if rem > small:
        return False
    return True