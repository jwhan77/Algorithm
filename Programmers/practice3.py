def solution(n):
    l = []
    for i in range(0, n+1):
        if i == 0 or i == 1:
            l.append(i)
        else:
            l.append(l[i-2]+l[i-1])

    return l[n] if l[n] < 1234567 else l[n] % 1234567