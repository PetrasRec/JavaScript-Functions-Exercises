
function distinct(str)
{
    return str.split('').filter((item, i, ar) => ar.indexOf(item) === i).join('');

    // long solution
    var d = new Map();
    for(let c of str.split(''))
        d.set(c);
    return Array.from(d.keys()).join('');
}
console.log(distinct("thequickbrownfoxjumpsoverthelazydog"));