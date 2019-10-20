
function firstNotRepeated(str)
{
    let arr = str.split('');
    for(let char of arr)
    {
        if(arr.reduce((a,b)=>a+(b===char ? 1 : 0), 0) === 1)
        {
            return char;
        }
    }
    return undefined;
}

console.log(firstNotRepeated('abacddbec'));