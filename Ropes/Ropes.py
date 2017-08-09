class Rope:
    def __init__(self, val = ''):
        self.root = Node(val)

    def calcWeight(self):
        def rootsWeight(node):
            if node == None:
                return 0
            if node.left == None and node.right == None:
                return node.weight
            return rootsWeight(node.left) + rootsWeight(node.right)
        return rootsWeight(self.root.left)

    # def insert(self, i, val):

    # def index(self, i, curr = self.root):
    #     if curr.weight < i:
    #         return self.index(i - curr.weight, curr.right)
    #     else:
    #         if node.left:
    #             return index(i, curr.left)
    #         else:
    #             return curr.data[i]

    def split(self, i):
        

    def concat(self, a):
        r = Rope()
        r.root.left = self.root
        r.root.right = a.root
        r.root.weight = r.calcWeight()
        return r

    def __str__(self, node = -1):
        if node == -1:
            node = self.root
        if node == None:
            return ''
        if node.left == None and node.right == None:
            return node.data
        return self.__str__(node.left) + self.__str__(node.right)



class Node:
    def __init__(self, data):
        self.data = data
        self.weight = len(data)
        self.left = None
        self.right = None

if __name__ == '__main__':
    a = 'A man a'
    b = ' plan a ca'
    c = 'nal Panama.'
    r1 = Rope(a)
    r2 = Rope(b)
    r4 = r1.concat(r2) # should return a new rope object that's 'A man a plan a ca'
    print(r4.concat(Rope(c)).root.weight)
