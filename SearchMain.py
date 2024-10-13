class Node:

    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

def newNode(x):

    temp = Node(0)
    temp.data = x
    temp.next = None
    return temp

def middle(start, last):

    if (start == None):
        return None

    slow = start
    fast = start . next

    while (fast != last):

        fast = fast . next
        if (fast != last):

            slow = slow . next
            fast = fast . next

    return slow

def binarySearch(head,value):

    start = head
    last = None

    while True :

        mid = middle(start, last)

        if (mid == None):
            return None

        if (mid . data == value):
            return mid

        elif (mid . data < value):
            start = mid . next

        else:
            last = mid

        if not (last == None or last != start):
            break

    return None

head = newNode(2)
head.next = newNode(5)
head.next.next = newNode(7)
head.next.next.next = newNode(11)
head.next.next.next.next = newNode(15)
head.next.next.next.next.next = newNode(18)
value = 9
if (binarySearch(head, value) == None):
    print("Element not Found\n")
else:
    print("Element Found")
