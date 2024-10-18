class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

def newNode(x):
    return Node(x)

def middle(start, last):
    if start is None:
        return None

    slow = start
    fast = start.next

    while fast != last:
        fast = fast.next
        if fast != last:
            slow = slow.next
            fast = fast.next

    return slow

def binarySearch(head, value):
    start = head
    last = None

    while True:
        mid = middle(start, last)

        if mid is None:
            return None

        if mid.data == value:
            return mid
        elif mid.data < value:
            start = mid.next
        else:
            last = mid

        # Correct break condition
        if last == start:
            break

    return None

# Create a sorted doubly linked list
head = newNode(2)
head.next = newNode(5)
head.next.prev = head  # Set the prev pointer
head.next.next = newNode(7)
head.next.next.prev = head.next  # Set the prev pointer
head.next.next.next = newNode(11)
head.next.next.next.prev = head.next.next  # Set the prev pointer
head.next.next.next.next = newNode(15)
head.next.next.next.next.prev = head.next.next.next  # Set the prev pointer
head.next.next.next.next.next = newNode(18)
head.next.next.next.next.next.prev = head.next.next.next.next  # Set the prev pointer

value = 9
result = binarySearch(head, value)
if result is None:
    print("Element not Found\n")
else:
    print("Element Found:", result.data)
