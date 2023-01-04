module.exports = function toReadable (number) {
    let arr = String(number).split('');
    let hundredths = ``;
    let tenths = `` ;
    let res = '';
    let hundred = ``;
    const obj = {
        toTen: {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
        },
        toTwenty: {
            10:'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        },
        toHundred: {
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        },
    };
    if (arr.length === 3) {
        hundred = `${searchToObj(obj.toTen , arr[0])} hundred`;
        if(parseInt(arr[1]) > 1) {
            hundredths = `${searchToObj(obj.toHundred  , arr[1])}`
            if(parseFloat(arr[2])===0){
                res = hundred + ' ' + hundredths
            }
            else{
                tenths = `${searchToObj(obj.toTen , arr[2])}`
                res = hundred +  ' ' + hundredths + ' ' + tenths
            }
        }else if(parseInt(arr[1]) === 1) {
            
            let num = String(arr[1]) + String(arr[2])
            hundredths = `${searchToObj(obj.toTwenty , num)}`
            res = hundred + ' ' + hundredths
            console.log(num)
        }
        else if( parseInt(arr[1]) === 0 && parseInt(arr[2]) >= 1) {
            console.log('13123')
            tenths = `${searchToObj(obj.toTen , arr[2])}`
            res = hundred + ' ' + tenths
        }
        else{
            
            res = hundred
        }
        return res
    }
    if(arr.length === 2) {
        if(parseInt(arr[0]) > 1 ){
            hundredths = `${searchToObj(obj.toHundred , arr[0])}`
            if(parseInt(arr[1]) >= 1) {
                tenths = `${searchToObj(obj.toTen , arr[1])}`
                console.log(tenths)
                res = hundredths + ' ' + tenths
            }
            else{
                res = hundredths
            }
            
        }else{
            let num = String(arr[0]) + String(arr[1])
            res = `${searchToObj(obj.toTwenty , num)}`
        }
    }
    if(arr.length === 1) {
        if(parseInt(arr[0]) === 0) {
            res = 'zero'
        }
        else{
            res = `${searchToObj(obj.toTen , arr[0])}`
        }
    }
    return res
}

function searchToObj(obj , num) {
    for (let key in obj) {
        if (key === num) {
            return obj[key]
        }
    }
}
