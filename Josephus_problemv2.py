from collections import deque


def Last_person(deque, k):
    permuation = []
    while deque:
        deque.rotate(1 - k)
        item = deque.popleft()
        permuation.append(item)
    return permuation

number_Of_Persons = 1_000 # Number of persons in the games
k = 3 # step

Persons = deque([i for i in range(1, number_Of_Persons + 1)]) # Represente the persons in a deque collection

Permutations = Last_person(Persons, k) # Look for the last person

Winner = Permutations[-1] # get the last person which is the winner

print(f"Winner is : {Winner}")