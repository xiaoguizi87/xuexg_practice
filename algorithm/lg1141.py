n, m = [int(x) for x in input().split()]
grid = ['0' * (n+1)]
for i in range(n):
  arr = input()
  grid.append('0' + arr)
used = [[False] * (n+1) for i in range(n + 1)]
result = [[0] * (n+1) for i in range(n + 1)]
ans, now = [], 0
dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
def dfs(x, y):
  global used, ans, now
  used[x][y], now = True, now + 1
  ans.append((x, y))
  for d in dirs:
    nx, ny = x + d[0], y + d[1]
    if 1 <= nx <= n and 1 <= ny <= n and grid[nx][ny] != grid[x][y] and (not used[nx][ny]):
      dfs(nx, ny)
  
for i in range(m):
  x, y = [int(x) for x in input().split()]
  if used[x][y]:
    print(result[x][y])
  else:
    ans, now = [], 0
    dfs(x, y)
    for (a, b) in ans:
      result[a][b] = now
    print(result[x][y])