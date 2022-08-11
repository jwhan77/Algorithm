# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.checkHeight(root) != float('-inf')
        
    def checkHeight(self, node):
        if node == None:
            return -1
        
        leftHeight = self.checkHeight(node.left)
        if leftHeight == float('-inf'):
            return float('-inf')
    
        rightHeight = self.checkHeight(node.right)
        if rightHeight == float('-inf'):
            return float('-inf')
    
        diff = abs(leftHeight - rightHeight)
        if diff > 1:
            return float('-inf')
        else:
            return max(leftHeight, rightHeight) + 1
        
# https://leetcode.com/problems/balanced-binary-tree/