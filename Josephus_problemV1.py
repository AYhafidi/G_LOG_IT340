def solution(array, k):
    permuation = []
    index = 0
    while array:
        index = (index + k - 1) % len(array)
        item = array.pop(index)
        permuation.append(item)
    return permuation

N = 1_000_000
k = 3
array =[i for i in range(1, N+1)]

print(solution(array, k))