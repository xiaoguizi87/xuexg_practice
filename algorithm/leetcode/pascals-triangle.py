class Solution:
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if not numRows:
          return []
        m = [[1]]
        if numRows == 1:
            return m
        for i in range(1, numRows):
            last = m[-1]
            a, b = [0] + last, last + [0]
            n = []
            for y in range(len(a)):          
                n.append(a[y] + b[y])
            m.append(n)
        return m