# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.checkRange(root, float("-inf") , float("inf")) != False
    
    
    def checkRange(self, node, minimum, maximum):
        if node == None:
            return -1
        
        if node.val > minimum and node.val < maximum:
            left = self.checkRange(node.left, minimum, node.val)
            if left == False:
                return False

            right = self.checkRange(node.right, node.val, maximum)
            if right == False:
                return False
        else:
            return False
        
        
# https://leetcode.com/problems/validate-binary-search-tree/