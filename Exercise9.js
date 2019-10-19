function detect_data_type(value)
{
    return typeof value;
}

console.log(detect_data_type(new Promise((first, last)=>{first()})));