function isPerfect(n)
{
    const divisors = (n) => {
        let arr = [];
        for(let i = 1; i <= n/2; i++)
            if(n%i==0)
                arr.push(i);
        return arr;
    }
    let sum = divisors(n).reduce((a,b)=>a+b,0);
    return sum === n;
}
console.log(isPerfect(8128));