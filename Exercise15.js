function power(b, n)
{
    return n===1 ? b : b*power(b, n-1);
}
console.log(power(2,3));