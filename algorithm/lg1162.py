def dfs(x, y):
  used[x][y] = True
  if mat[x][y] == 0:
    mat[x][y] = 2
  if mat[x][y] == 1:
    return
  for dir in ((0, 1), (0, -1), (1, 0), (-1, 0)) :
    nx, ny = x + dir[0], y + dir[1]
    if 0 <= nx < n and 0 <= ny < n and not used[nx][ny]:
      dfs(nx, ny)

n = int(input())
mat = []
for _ in range(n):
  a = [int(x) for x in input().split()]
  mat.append(a)
used = [[False] * n for x in range(n)]

for i in range(n):
  dfs(0, i)
  dfs(n-1, i)
  dfs(i, 0)
  dfs(i, n-1)
#print(mat)
for l in mat:
  for x in l:
    print(2 - x, end=' ')
  print()

