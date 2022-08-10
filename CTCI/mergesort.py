class Solution:
    def sortArray(self, nums):
        tmp = nums[:]
        self.mergeSort(nums, tmp, 0, len(nums)-1)
        return nums

    
    def mergeSort(self, nums, tmp, left, right):
        if left < right:
            mid = int((left + right) / 2)
            self.mergeSort(nums, tmp, left, mid)
            self.mergeSort(nums, tmp, mid + 1, right)
            self.merge(nums, tmp, left, mid, right)
        
        
    def merge(self, nums, tmp, left, mid, right):
        for i in range(left, right+1):
            tmp[i] = nums[i]
        
        helperLeft = left # 나눠진 배열 중 왼쪽 배열의 첫번째
        helperRight = mid + 1 # 나눠진 배열 중 오른쪽 배열의 첫번째
        current = left # 각 배열의 첫 번째 원소부터 비교
        
        while helperLeft <= mid and helperRight <= right:
            if tmp[helperLeft] < tmp[helperRight]:
                nums[current] = tmp[helperLeft]
                helperLeft += 1
            else:
                nums[current] = tmp[helperRight]
                helperRight += 1
            current += 1
            
        remaining = mid - helperLeft
        for i in range(0, remaining + 1):
            nums[current + i] = tmp[helperLeft + i]