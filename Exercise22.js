function occurances(str, letter)
{
    return str.split('').reduce((a,b)=>a+(b==letter?1:0), 0);
}

console.log(occurances( 'w3resource.com', 'o' ));