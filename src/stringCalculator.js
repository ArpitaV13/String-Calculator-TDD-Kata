function add(numbers){
    if(!numbers) return 0;

    let delimiter= /[\n,]/;
    if(numbers.startsWith('//')){
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers= parts[1];
    }
    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);

    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
    }

    return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);

}

module.exports = {add};
