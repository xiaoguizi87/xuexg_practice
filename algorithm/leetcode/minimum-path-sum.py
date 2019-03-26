class Solution:
  def minPathSum(self, grid):
    m, n = len(grid), len(grid[0])
    dp = [0] * n
    dp[0] = grid[0][0]
    for i in range(1, m):
      dp[i] = dp[i-1] + grid[0][i]
    for i in range(1, m):
      dp[0] += grid[i][0]
      for j in range(1, n):
        dp[j] = min(dp[j-1] + grid[i][j-1], dp[j] + grid[i-1][j])  + grid[i][j]
    # print(dp)
    return dp[n-1]

s = Solution()
print(s.minPathSum([
[[1,2],[5,6],[1,1]]
]))