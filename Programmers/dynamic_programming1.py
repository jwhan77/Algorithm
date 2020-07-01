def solution(triangle):
    for i, l in enumerate(triangle):
        if i == 0:
            continue
        for j, n in enumerate(l):
            if j == 0:
                triangle[i][j] = triangle[i-1][j] + n
            elif j == len(l)-1:
                triangle[i][j] = triangle[i-1][j-1] + n
            else:
                triangle[i][j] = n + triangle[i-1][j-1] if triangle[i-1][j-1] >= triangle[i-1][j] else n + triangle[i-1][j]
    return max(triangle[len(triangle)-1])