import sys

for index, name in enumerate(sys.argv):
    if (index != 0):
        print(str(index) + ". " + name)

