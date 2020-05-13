def solution(numbers, target):
    cal = [0]
    for number in numbers:
        a = []
        for c in cal:
            a.append(c + number)
            a.append(c + (number * -1))
        cal = a
    return cal.count(target)

n = [1, 1, 1, 1, 1]
t = 3
answer = solution(n, t)
print(answer)