from collections import deque


def Last_person(deque, step):
    permuation = []
    while deque:
        deque.rotate(1 - step) # rotate([1, 2, 3, 4, 5], 4) => [2, 3, 4, 5, 1]
        item = deque.popleft()
        permuation.append(item)
    return permuation

number_Of_Persons = 1_000_000 # Number of persons in the game
step = 3 # step

Persons = deque([i for i in range(1, number_Of_Persons + 1)]) # Represente the persons in a deque collection

Permutations = Last_person(Persons, step) # Look for the last person

Winner = Permutations[-1] # get the last person which is the winner

print(f"Winner is : {Winner}")