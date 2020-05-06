def solution(scoville, K):
    answer = 0

    while scoville[0] < K:
        second_least_spicy = scoville[1] if scoville[1] < scoville[2] else scoville[2]
        scoville[0] = scoville[0] + (second_least_spicy * 2)
        minHeapify(scoville, 0)
        if scoville[0] > K:
            break
        answer += 1

    if answer == 0:
        return -1
    return answer

def minHeapify(scoville, i):
    left = 2*i+1
    right = 2*i+2
    smallest = i
    if left <= len(scoville)-1 and scoville[left] < scoville[smallest]:
        smallest = left
    if right <= len(scoville)-1 and scoville[right] < scoville[smallest]:
        smallest = right
    if smallest != i:
        tmp = scoville[smallest]
        scoville[smallest] = scoville[i]
        scoville[i] = tmp
        minHeapify(scoville, smallest)

# def heap_sort(scoville):
#     i = 0
#     while i < len(scoville) / 2:
#         print(scoville)
#         parent = scoville[i]
#         left_child = scoville[2*i+1]
#         right_child = scoville[2*i+2]
#         second_least_spicy = left_child if left_child < right_child else right_child
#         if parent > left_child:
#             scoville[i] = left_child
#             scoville[2*i+1] = parent
#             i = 2*i+1
#         elif parent > right_child:
#             scoville[i] = right_child
#             scoville[2*i+2] = parent
#             i = 2*i+2
#         else:
#             break

test_list = [1,2,3,9,10,12]
solution(test_list, 7)