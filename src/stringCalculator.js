function add(numbers){
    if(!numbers) return 0;

    let delimiter= /[\n,]/;
    if(numbers.startsWith('//')){
        const delimitersSectionEnd = numbers.indexOf('\n');
        const delimitersSection = numbers.slice(2,delimitersSectionEnd);
        numbers = numbers.slice(delimitersSectionEnd + 1);

        const delimiterMatches = delimitersSection.match(/\[([^\]]+)\]/g);

        if(delimiterMatches){
            const delimitersLeft = delimiterMatches.map(d => d.slice(1,-1).replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'));
            delimiter = new RegExp(delimitersLeft.join('|'));
        }
        else{
            delimiter = new RegExp(delimitersSection.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'))
        }
    }
    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);

    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
    }

    return nums.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);

}

module.exports = {add};
