class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            topElement = stack[-1] if stack else None
            if (topElement == '(' and i == ')'
              or topElement == '{' and i == '}'
               or topElement == '[' and i == ']' ):
                stack.pop()
            elif i in ('([{'):
                stack.append(i) 
            else:
                return False

        
        return False if len(stack) > 0 else True
