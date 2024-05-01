class Solution:
    def isPalindrome(self, s: str) -> bool:

        # define left and right pointers
        left = 0
        right = len(s) - 1

        # while left is less than right 
        while left < right:
            # while left is not alphanumeric
            while left < right and not self.alphaNum(s[left]):
                left += 1
                # while right is not alphanumeric
            while left < right and not self.alphaNum(s[right]):
                right -= 1
            # check if characters on the left and right are not equal to one another
            if s[left].lower() != s[right].lower():
                return False
            left  = left + 1
            right = right - 1
        return True


    # create a function to check if a character is alphanumeric
    # this function includes all values
    def alphaNum(self, c):
        return (
            ord("A") <= ord(c) <= ord("Z")
            or ord("a") <= ord(c) <= ord("z")
            or ord("0") <= ord(c) <= ord("9")
        )

    s = "A man, a plan, a canal: Panama"
    isPalindrome(s)  # expect True

