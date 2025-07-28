function add(numbers){
    if(!numbers) return 0;
    const parts = numbers.split(',').map(Number);
    return parts.reduce((sum, num)=>sum+num, 0);
}

module.exports = {add};
