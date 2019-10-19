
function allOutcomes(str)
{
    var arr = [str];
    for(let i = 0; i < str.length; i++)
    {
        for(let j = i===0?1:i; j < str.length; j++)
        {
            arr.push(str.substr(i,j));
        }
    }

    return arr;
}

console.log(allOutcomes("dog"));