//Write a JavaScript function that reverse a number.

module.exports = String.prototype.reverse = 
function()
{
    let newStr = '';
    for(let i = this.length - 1; i>=0; i--)
    {
        newStr+=this.charAt(i);
    }   
    return newStr;
}


String.prototype.reverse2 = 
function()
{
    return this.split('').reverse().join('');
}

console.log((56842).toString().reverse2());