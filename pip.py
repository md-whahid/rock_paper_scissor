stack = [1, 2, 3, 4, 5, 6, 7]
condition = True
print(len(stack))

while condition:
  print("********* Stack Menu *********\n")
  print("1. Push")
  print("2. Delete")
  print("3. display")
  print("4. Exit\n")
  print("******************************\n")

  inputComand = int(input("Enter your choise: "))

  if(inputComand == 1):
    myStack = int(input("enter a number: "))
    stack.append(myStack)

  elif(inputComand == 2):
    myStack = int(input("enter index number to delete: "))
    arrayLength = len(stack)

    while(myStack > arrayLength):
      print("This element does not exist :(")
      myStack = int(input("enter another index number: "))
    stack.pop(myStack)

  elif(inputComand == 3):
    print(stack)

  elif(inputComand == 4):
    condition = False
    print("You have succesfully Exited :)")

  else:
    print("Please enter number from 1 to 4\nThanks :)")
  
