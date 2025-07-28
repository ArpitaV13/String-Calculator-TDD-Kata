function add(numbers){
    if(!numbers) return 0;

    let delimeter= /[\n,]/;
    if(numbers.startsWith('//')){
        const parts = numbers.split('\n');
        delimeter = new RegExp(parts[0].slice(2));
        numbers= parts[1];
    }
    return numbers.split(delimeter).map(Number).reduce((sum,num)=>(sum+num),0);
}

module.exports = {add};
