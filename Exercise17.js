
function occurances(str, char)
{
    var m = new Map();

   // return str.split('').reduce((a,b)=>a+(b===char?1:0), 0);
   Array.from(str.split('')).forEach((v)=>{
       if(m.get(v)===undefined)
             m.set(v,1);
        else
            m.set(v,m.get(v)+1);
   });
   return m;
}

console.log(occurances('tttest', 't'));