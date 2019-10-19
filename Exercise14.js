function getChange(n, coins)
{
    var arr = [];

    coins.sort((a,b)=>b-a);
    for(let coin of coins)
    {
        while(n-coin >= 0)
        {
            arr.push(coin);
            n-=coin;
        }
    }

    return arr.join(', ');
}

console.log(getChange(46,[25,10,5,2,1]));