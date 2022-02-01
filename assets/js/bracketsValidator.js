class Stack {
    constructor(maxSize, ...array) {
        this.maxSize = maxSize;
        this.size = 0;

        for (const item of array) {
            this.push (item);
        }
    }
    get isEmpty() {
        return this._size === 0;
    }
    get size() {
        return this._size;
    }
    get maxSize() {
        return this._maxSize;
    }
    set maxSize(val) {
        this._maxSize = val;
    }
    set size(val) {
        this._size = val;
    }
    push(value) {
        if(this.size >= this.maxSize) {
            throw new RangeError('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this.size = this.size + 1;
        return this.size;
    }
    pop() {
        if(this.isEmpty) {
            throw new RangeError('Stack is empty');
        }
        

        const lastItem = this[`_${this.size - 1}`]
        delete this[`_${this.size - 1}`];
        this.size = this.size - 1;
        return lastItem;
    }
    pick() {
        return this[`_${this.size - 1}`];
    }
}

const options = {
    brackets: {
        '(':')',
        '{':'}',
        '[':']',
        '<':'>'
    },
    isStrict: false
};

function bracketsValidator(str, {brackets, isStrict}) {
    const stack = new Stack(str.length);
    const closeBrackets = Object.values(brackets);

    
    for(const symbol of str) {
        if (brackets[symbol]) {
            stack.push(symbol);
            continue;
        }
    
        if(stack.isEmpty) {
            return false;
        }
        
        if(symbol === brackets[stack.pick()]) {
            stack.pop();
        } else if (brackets[symbol] || closeBrackets.includes(symbol)){
            return false;
        }
    }
    return stack.isEmpty;


    // Неверный подход
    // let res = 0;
    // for(const symbol of str) {
    //     if(symbol === '(') {
    //         res++;
    //     }
    //     if(symbol === ')') {
    //         res--;
    //     }
    // }
    // return res === 0 ; 

    
    // Работает только с круглыми
    // for(const symbol of str) {
    //     if (symbol === '(') {
    //         stack.push(symbol);
    //     }

    //     if(stack.isEmpty) {
    //         return false;
    //     }

    //     if(symbol === ')') {
    //         stack.pop();
    //     }
    // }
    // return stack.isEmpty;
}
