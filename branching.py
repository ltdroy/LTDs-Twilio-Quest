import sys

n1 = int(sys.argv[1])

n2 = int(sys.argv[2])

sum_v = n1 + n2

if (sum_v <= 0):
    print("You have chosen the path of destitution.")
if (sum_v >= 1 and sum_v <= 100):
    print("You have chosen the path of plenty.")
if (sum_v > 100):
    print("You have chosen the path of excess.")
