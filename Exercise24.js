

function bubbleSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] < arr[j])
            {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));