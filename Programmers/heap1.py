# 힙 - 더 맵게
import heapq

def kth_smallest(heap, k):
    for _ in range(k):
        kth_min = heapq.heappop(heap)
    return kth_min

def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0

    while len(scoville) >= 2 and scoville[0] < K:
        new_spicy = scoville[0] + (kth_smallest(scoville, 2) * 2)
        answer += 1
        heapq.heappush(scoville, new_spicy)
    if scoville[0] < K:
        return -1
    return answer