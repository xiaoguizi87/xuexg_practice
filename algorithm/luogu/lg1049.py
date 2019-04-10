v = int(input())
n = int(input())
w = []
for _ in range(n):
  w.append(int(input()))
# print(w)
dp = [0] * (v + 1)
for i in range(n):
  for j in range(v, w[i] - 1, -1):
    dp[j] = max(dp[j], dp[j - w[i]] + w[i])
print(v - dp[v])