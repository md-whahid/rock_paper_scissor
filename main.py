stack = []
condition = True

while condition:
  print ("*** Stack Menu *** \n")
  print ("1. Push")
  print ("2. Pop")
  print ("3. Display")
  print ("4. Exit \n")

  print("Your Current Stack Is = ",stack "\n")

  inputCommand = int(input("Enter Your Choice (1-4): "))

  if(inputCommand == 1):
    inputValue = int(input("Enter A Element To Push: "))
    stack.append(inputValue)
    print("Your Current Stack Is = ",stack)

  elif(inputCommand == 2):
    inputValue = int(input("Enter A Element To Delete: "))
    stack.pop(inputValue)
    print("Your Current Stack Is = ",stack)

  elif(inputCommand == 3):
    print("Your Current Stack Is: \n",stack)

  elif(inputCommand == 4):
    condition = False
  else:
    print("Sorry, Something Went Worng :( ")







