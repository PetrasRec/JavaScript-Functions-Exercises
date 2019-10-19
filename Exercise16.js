
function distinct(str)
{
    var d = {};
    for(let c of str.split(''))
    {
        d[c] = 4;
    }
    return d.values();
}

console.log(distinct("thequickbrownfoxjumpsoverthelazydog"));