function longestPalindrome(str)
{
    var arr = str.split('');
    let bestPalindrome = '';

    const isPalindrome = (str) =>
    {
        for(let i = 0; i < str.length / 2; i++)
        {
            if(str[i] !==str[str.length - 1 - i])
                return false;
        }
        return true;
    }   
    for(let i = 0; i < str.length; i++)
    {
        // check if this is a palindrome
        for(let j = 0; j <= str.length - i ; j++)
        {
             let newStr = str.substr(i, j);
             if(isPalindrome(newStr) && newStr.length > bestPalindrome.length)
             {
                 bestPalindrome = newStr;
             }
        }
    }
    return bestPalindrome;
}
console.log(longestPalindrome('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'));