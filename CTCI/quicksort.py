class Solution:
    def sortArray(self, nums):
        self.quicksort(nums, 0, len(nums) - 1)
        return nums

    def quicksort(self, nums, left, right):
        index = self.partition(nums, left, right)
        if left < index - 1:
            self.quicksort(nums, left, index - 1)
        if index < right:
            self.quicksort(nums, index, right)

    def partition(self, nums, left, right):
        pivot = nums[int((left + right) / 2)]

        while left <= right:
            while nums[left] < pivot:
                left += 1
            while nums[right] > pivot:
                right -= 1

            if left <= right:
                (nums[left], nums[right]) = (nums[right], nums[left])
                left += 1
                right -= 1

        return left
