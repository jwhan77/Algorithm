class Node:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None
      
class Tree:
  def __init__(self):
    self.root = None

  def create_tree(self):
    self.root = Node(1)
    self.root.left = Node(2)
    self.root.right = Node(3)
    n = self.root.right
    n.left = Node(4)
    n = n.left
    n.right = Node(5)
    n = n.right
    n.left = Node(6)
    n.right = Node(7)

    return self.root



def create_linked_list(lists, node, depth):
  if node == None:
    return
    
  if len(lists) == depth:
    lists.append([])
  lists[depth].append(node.data)

  create_linked_list(lists, node.left, depth+1)
  create_linked_list(lists, node.right, depth+1)


t = Tree()
root = t.create_tree()

lists = []
create_linked_list(lists, root, 0)
print(lists)