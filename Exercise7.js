function countVowels(str)
{
    var vowels = ['e','u','o','a', 'i'];
    return str.split('').reduce((a,b)=> a+(vowels.includes(b.toLowerCase())?1:0),0);
}

console.log(countVowels("The quick brown fox"));