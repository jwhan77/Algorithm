def run():
    size = int(input())
    tri_list = []
    for i in range(0, size):
        tri_list.append([int(i) for i in input().split(' ')])

    solution(tri_list)

def solution(tri_list):
    for i, l in enumerate(tri_list):
        if i == 0:
            continue
        for j, n in enumerate(l):
            if j == 0:
                tri_list[i][j] = tri_list[i-1][j] + n
            elif j == len(l)-1:
                tri_list[i][j] = tri_list[i-1][j-1] + n
            else:
                tri_list[i][j] = n + tri_list[i-1][j-1] if tri_list[i-1][j-1] >= tri_list[i-1][j] else n + tri_list[i-1][j]

    print(max(tri_list[len(tri_list)-1]))

run()