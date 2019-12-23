import queue

def run():
    n = int(input())
    V = [[0 for j in range(0, n)] for i in range(0, n)]
    exist_path = [[0 for j in range(0, n)] for i in range(0, n)]
    
    for i in range(0, n):
        for j, e in enumerate(map(int, input().split())):
            V[i][j] = e
    
    for i in range(0, n):
        visited = [0 for i in range(0, n)]
        q = queue.Queue()
        q.put(i)

        while q.qsize() != 0:
            current_node = q.get()
            for j in range(0, n):
                if visited[j] == 0 and V[current_node][j] == 1:
                    q.put(j)
                    visited[j] = 1
                    exist_path[i][j] = 1
                    
    for i in range(0, n):
        print(' '.join(str(m) for m in exist_path[1]))
                
run()