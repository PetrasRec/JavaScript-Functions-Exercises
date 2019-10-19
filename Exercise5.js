

function upperFirst(str)
{
    var arr = str.split(' ');
    var newArr = [];
    Array.from(arr).forEach(function (child) {
        newArr.push(child.charAt(0).toUpperCase() + child.slice(1));
    });
    return newArr.join(' ');
}


console.log(upperFirst('the quick brown fox'));