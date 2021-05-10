// Первое задание

function makeObjectDeepCopy(obj) {
   let copyObj = Object.assign({}, obj)
   Object.keys(copyObj).forEach((key) =>{
       if (typeof obj[key] === 'object') {
           copyObj[key] = makeObjectDeepCopy(obj[key])
       }else{
           copyObj[key] = obj[key]
       }
   })
   return copyObj;
}

// Второе задание

function selectFromInterval(arr,firstLimit,scndLimit) {
    if ( !arr.every((item)=>{return typeof item === 'number';}) 
        || arr.length === 0 
        || typeof firstLimit !== 'number' 
        || typeof scndLimit !== 'number'
    ) {
        console.log('Ошибка: одно из значений является невалидным');
    }else{
        let min; 
        let max;
        if (firstLimit < scndLimit) {
            min = firstLimit;
            max = scndLimit;
        }else{
            max = firstLimit;
            min = scndLimit;
        }
        let range = [];
        for (let digit of arr) {
            digit = +digit;
            if ( digit <= max && digit >= min ) {
                range.push(digit);
            }
        }
        return range;
    }
}

// Третье задание
const myIterable = { from:6, to: undefined  };

myIterable[Symbol.iterator] = function(){
    
    return{
        to: this.to,
        from: this.from,
        current:this.from,
        last: this.to,
        
        next(){
            if (this.from > this.to || typeof this.from !== 'number' || typeof this.to !== 'number' ) {
                return{ done: true, value: console.log('Ошибка итерации!')}
            }else{
                if (this.current <= this.last) {
                    return{done: false, value: this.current++}
                } else{
                    return{done: true}
                    
                }
            }
        }
    }

};


