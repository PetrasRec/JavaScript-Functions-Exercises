var allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generateRandomString(n)
{
    return (new Array(n)).fill().map(()=>allChars.charAt(Math.floor(Math.random()*allChars.length))).join('');
}

console.log(generateRandomString(100));