n = int(input())
c = 1
i = 2
while c != 0:
    if n % i == 0:
        c = 0
        a = n / i
        b = n - a
    i += 1
print(int(a), int(b))

