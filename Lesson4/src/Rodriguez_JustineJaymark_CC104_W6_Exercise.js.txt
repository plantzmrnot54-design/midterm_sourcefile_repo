'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {                                               //dont forget method to sa isip mo
  constructor() 
  {
    // TODO: Create the internal storage.
    this.slist =[];
  }

  push(element)
 {
    // TODO: Add an element to the top.
    this.slist.push(element);

  }

 pop() 
  {
    // TODO: Remove and return the top element.
    if(this.isEmpty())
    {
    return"theres nothing here bruh. its empty"
    }
    return this.slist.pop();
  }
   peek() 
   {
    // TODO: Return the top without removing it.
    if (this.isEmpty())
    {
      return "bruh its empty"
    }
    return this.slist[this.slist.length-1];
  }
  isEmpty() 
  {
    // TODO: Return true when empty.
    return this.slist.length === 0;
  }

  size() 
  {
    // TODO: Return the number of elements.
    return this.slist.length;
  }

  toString() 
  {
    // TODO: Return all elements as text.
    return this.slist.toString();
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// TODO: Push the three required actions.
actionHistory.push("Opened ticket#101");
actionHistory.push("Assigned ticket#101");
actionHistory.push("Closed ticket#101");

// TODO: Display peek, pop, remaining actions, and size.
console.log("top of actionHistory :"+actionHistory.peek());
console.log("pop/ undo action :"+actionHistory.pop());
console.log("remaining actions :"+actionHistory.toString());
console.log("stack size :"+actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() 
  {
    // TODO: Create the internal storage.
    this.qlist=[];
  }

  enqueue(element) 
  {
    // TODO: Add an element at the back.
    this.qlist.push(element);
  }

  dequeue() 
  {
    // TODO: Remove and return the front element.
    return this.qlist.shift();                              //shift() shifts the thinng basta erase yung una bawal din pala mag add ng arguments
  }

  front() 
  {
    // TODO: Return the front without removing it.
    return this.qlist[0];
  }

  isEmpty() 
  {
    // TODO: Return true when empty.
    return this.qlist.length === 0;
  }

  size() 
  {
    // TODO: Return the number of elements.
    return this.qlist.length;
  }

  toString() 
  {
    // TODO: Return all elements as text.
    return this.qlist.toString();
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// TODO: Enqueue the four required requests.
waitingRequests.enqueue("Ticket#201 - Password Reset");
waitingRequests.enqueue("Ticket#202 - No Internet");
waitingRequests.enqueue("Ticket#203 - Printer Problem");
waitingRequests.enqueue("Ticket#204 - Software Installation");
// TODO: Display the front request.
console.log("next request " +waitingRequests.front());
// TODO: Dequeue two requests.
console.log("processesd :"+waitingRequests.dequeue());
console.log("processesd :"+waitingRequests.dequeue());
// TODO: Display the remaining queue and its size.
console.log("remaining requests "+waitingRequests);
console.log( "que size"+ waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue 
{
  constructor() 
  // TODO: Create an item containing the request and priority.
  { 
    // TODO: Create the internal storage.
    this.pqlist=[];
  }

enqueue(request, priority) 
  { 
    let queueItem = { request, priority };
    let added = false;

    for (let i = 0; i < this.pqlist.length; i++)
      { 
        
        if (queueItem.priority < this.pqlist[i].priority) 
          {
            this.pqlist.splice(i, 0, queueItem);
            added = true;
            break;
          }
      }
    if (false==added) 
    {
      this.pqlist.push(queueItem);
    }
    // TODO: Preserve arrival order when priorities are equal.
    // not now>>>>>>
  }

  dequeue() 
  {
    // TODO: Remove and return the first item.
    return this.pqlist.shift();
  }

  size() {
    // TODO: Return the number of items.
    return this.pqlist.length;
  }

  print() {
    // TODO: Display every request and priority.
    console.log(this.pqlist);
  }

}
console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

const piorylist = 
[
  { request: "Ticket #301 - Install Browser", priority: 3 },
  { request: "Ticket #302 - Server Offline", priority: 1 },
  { request: "Ticket #303 - Faculty PC Failure", priority: 2 },
  { request: "Ticket #304 - Internet Laboratory Down", priority: 1 }
];

for (let i = 0; i < piorylist.length; i++)                              //go back to project 2 for references gona neet it
{              
  urgentRequests.enqueue(piorylist[i].request, piorylist[i].priority);
}
// TODO: Print the initial priority order.
console.log("\ninitial value");
urgentRequests.print();

// TODO: Process the first request.
console.log("Processed :", urgentRequests.dequeue());

// TODO: Print the remaining requests.
console.log("remaining request ")
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node 
{
  constructor(element) 
  {
    // TODO: Store the element.
    this.element = element;
    // TODO: Set next to null.
    this.next = null;
  }
}

class LinkedList 
{
  constructor() 
  {
    // TODO: Set length to zero.
    this.length =0;
    // TODO: Set head to null.
    this.head =null;
  }

  append(element) 
  {
    // TODO: Add a node at the end.
    let newNode = new Node(element);
    if (this.head ===null)
    {
      this.head =newNode;
    }
    else
    {
      let current =this.head;
      while(current.next !== null)
        {
          current=current.next;
        }
      current.next = newNode;
    }
    this.length++;
  }

  insert(position, element)     //i got help from ai here too difucult gonna study more.
  {
    // TODO: Reject invalid positions.
    if (position <0 || position > this.length)
    {
      return false
    }
    let newNode = new Node(element);
    // TODO: Insert at the beginning, middle, or end.
    if (position === 0)
    {
      newNode.next = this.head;
      this.head = newNode;
    }
    else
    {
      let current = this.head;
      let previous = null;
      let index = 0;

      while(index < position)
      {
        previous = current;
        current = current.next;
        index ++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }

  removeAt(position) 
  {
    // TODO: Reject invalid positions.
    if (position <0 || position >= this.length)
    {
      return false
    }
    let current = this.head;

    // TODO: Remove the node at the requested position.
    if (position===0)
    {
      this.head = current.next;
    }
    else
    {
      let previous = null;
      let index = 0;

      while (index< position)
      {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  indexOf(element) 
  {
    // TODO: Traverse and return the matching position.
    let current = this.head;
    let index = 0;

    while (current !== null)
    {
      if (current.element === element)
      {
        return index;
      }
      current = current.next;
      index++;
    }
    // TODO: Return -1 when the element is absent.
    return -1;
  }

  remove(element) 
  {
    // TODO: Reuse indexOf and removeAt.
    let index = this.indexOf(element);            //reuse haha
    return this.removeAt(index);
  }

  isEmpty() {
    // TODO: Return true when no nodes exist.
    let tf ;
    if (this.length== 0)
    {
      tf =true;
    }
    else
    {
      tf =false;
    }
    return tf
  }

  size() {
    // TODO: Return the number of nodes.
    return this.length;
  }

  toString() 
  {
    // TODO: Traverse and return all elements as text.
    let current = this.head;
    let result = "";
    while (current !== null) 
    {
      result += current.element +(current.next ? ",\n " : "");
      current = current.next;
    }
    return result;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// TODO: Append the three required requests.
completedRequests.append("Ticket #401 - Account Activated");
completedRequests.append("Ticket #402 - Printer Connected");
completedRequests.append("Ticket #403 - Antivirus Updated");
// TODO: Insert Ticket #400 at position 0.
completedRequests.insert(0,"Ticket #400 - Computer Diagnosed")
// TODO: Insert Ticket #405 at the end.                    //can i use apend? bawal instructions.
completedRequests.insert(completedRequests.size(),"Ticket #405 - Browser Updated")

// TODO: Display the complete list.
console.log("completed list\n"+completedRequests.toString());
// TODO: Search for Ticket #402.
console.log("\nindex of ticket #402 :"+completedRequests.indexOf("Ticket #402 - Printer Connected"));
// TODO: Remove the item at position 1.
completedRequests.removeAt(1);
// TODO: Remove Ticket #403 by value.
completedRequests.remove("Ticket #403 - Antivirus Updated")
// TODO: Display the final list and size.
console.log("final list\n"+completedRequests.toString());
console.log("size :"+completedRequests.size())









//https://www.geeksforgeeks.org/javascript/implementation-stack-javascript/