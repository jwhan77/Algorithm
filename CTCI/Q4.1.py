# My Solution
class Tree:
    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None


    def __init__(self):
        self.root = None


    def minimal_height_tree(self, arr):
        self.root = self.int_to_node(arr)


    def int_to_node(self, arr):
        if len(arr) == 0:
            return None

        if len(arr) == 1:
            return self.Node(arr[0])

        mid = int(len(arr) / 2)
        n = self.Node(arr[mid])
        n.left = self.int_to_node(arr[:mid])
        n.right = self.int_to_node(arr[mid + 1:])
        return n


# Solution
class Tree:
    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None


    def __init__(self):
        self.root = None


    def minimal_height_tree(self, arr):
        self.root = self.int_to_node(arr, 0, len(arr) - 1)


    def int_to_node(self, arr, start, end):
        if end == -1:
            return None

        if end == 0:
            return self.Node(arr[0])

        mid = int((start + end) / 2)
        n = self.Node(arr[mid])
        n.left = self.int_to_node(arr, start, mid - 1)
        n.right = self.int_to_node(arr, mid + 1, end)
        return n


# test
t = Tree()
test_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
t.minimal_height_tree(test_arr)


# array를 slice해서 넘기면 space complexcity 올라감