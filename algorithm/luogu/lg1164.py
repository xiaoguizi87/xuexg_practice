n, m = [int(x) for x in input().split()]
w = [int(x) for x in input().split()]
dp = [0] * (m + 1)
dp[0] = 1
for i in range(n):
  for j in range(m, w[i]-1, -1):
    dp[j] += dp[j - w[i]]
print(dp[m])