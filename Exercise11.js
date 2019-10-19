

function secondBest(arr)
{
    arr.sort();
    return [arr[1], arr[arr.length - 2]].join(', ');
}

console.log(secondBest([1,2,3,4,5]));