import sys

input_list = sys.argv
del input_list[0]
input_list = [int(i) for i in input_list]

for n in input_list:
    if (n % 3 == 0 and n % 5 == 0):
        print("fizzbuzz")
    else:
        if (n % 3 == 0):
            print("fizz")
        else:
            if (n % 5 == 0):
                print("buzz")
            else:
                print(n)

