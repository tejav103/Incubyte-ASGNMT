const add = (str) => {
    if(typeof str !== 'string'){
        throw new Error('Invalid input!')
    }
    let delimetter = ','
    let sum = 0
    if(str.charAt(0)==='/' && str.charAt(1)==='/'){
        delimetter = str.charAt(2)
        str = str.slice(3)
    }
    str=str.replace("\n", delimetter)
    str=str.replace("\\n", delimetter) // To handle an edge case if the string passed has \n chars instead of new line
    const numbers = str.split(delimetter).map(char => Number(char))
    const negativeNumebrs = numbers.filter(number => number < 0)
    if(negativeNumebrs.length){
        throw new Error('negative numbers not allowed '+negativeNumebrs.join(','))
    }
    sum = numbers.reduce((acc,a)=> acc+a, 0)
    return sum;
}
console.log(add(process.argv[2]))
module.exports = {add}