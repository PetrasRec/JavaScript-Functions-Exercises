

function longestWord(str)
{
    return str.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}

console.log(longestWord("Web Development Tutorial"));