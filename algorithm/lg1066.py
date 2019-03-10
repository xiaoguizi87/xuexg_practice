t, m = [int(x) for x in input().split()]
w, val = [], []
for _ in range(m):
  a = [int(x) for x in input().split()]
  w.append(a[0])
  val.append(a[1])
dp = [0] * (t + 1)
for i in range(m):
  for j in range(w[i], t + 1):
      dp[j] = max(dp[j], dp[j-w[i]] + val[i])
print(dp[t])