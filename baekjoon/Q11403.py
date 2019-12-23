#11403
import queue
import numpy as np

def run():
    n = int(input(""))
    V = np.zeros((n,n), dtype=np.int8)
    exist_path = np.zeros((n,n), dtype=np.int8)
    
    for i in range(0, n):
        line = input("")
        line_split = line.split()
        for j in range(0, n):
            V[i][j] = int(line_split[j])
    
    for i in range(0, n):
        visited = np.zeros(n, dtype=np.int8)
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