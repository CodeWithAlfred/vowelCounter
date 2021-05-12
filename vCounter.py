userInput = str(input('Enter text: '))
letters = ['a','e','i','o','u']
counter = 0

for ch in userInput:
    x = 0
    while x < len(letters):
        if ch == letters[x]:
            counter+=1
        x+=1
print(counter)