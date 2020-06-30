# LIS
def run():
    n = int(input())
    arr = []
    for i in range(0, n):
        arr.append(int(input()))

    solution(n, arr)

def solution(n, arr):
    lis = [1] * n
    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j] and lis[i] < lis[j]+1:
                lis[i] = lis[j]+1
    print(n - max(lis))

run()