

function longestUnique(str)
{
    let bestStr = "";

    for(let i = 0; i < str.length; i++)
    {
        for(let j = i + 1; j <= str.length; j++)
        {
            let newStr = str.substr(i,j).split('');
            let isUnique = newStr.reduce(((a,b, index)=> {
                return !a ? false : (newStr.indexOf(b) === index);
            }), true);
            if(isUnique && bestStr.length < newStr.length)
           {
               bestStr = newStr.join('');
           }
            
        }
    }
    return bestStr;
}

console.log(longestUnique('example.com'));