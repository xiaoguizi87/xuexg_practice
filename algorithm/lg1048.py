t, m = [int(x) for x in input().split()]
w, val = [], []
for _ in range(m):
  a = [int(x) for x in input().split()]
  w.append(a[0])
  val.append(a[1])
dp = [0] * 1001
for i in range(len(w)):
  for j in range(t, w[i]-1, -1):
    if j >= w[i]:
      dp[j] = max(dp[j], dp[j-w[i]] + val[i])
print(dp[t])