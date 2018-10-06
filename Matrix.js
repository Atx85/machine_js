const Matrix = (function(){
    function Matrix() {
        this.value = [];

    }

    Matrix.prototype.init = function(){
        console.log('matrix created');
    }

    Matrix.prototype.create = function( n ) {
        for(let i = 0; i < n; i++) {
            this.value[i] = [];
        }

        for(let i = 0; i < n; i++) {
            for(let j = 0; j <n; j++) {
                this.value[i][j] = Math.floor((Math.random() * 10));        
            }
        }
    }

    Matrix.prototype.print = function(){
        console.table(this.value);
        console.log(getMin(this.value), getMax(this.value));
    }

    Matrix.prototype.normalize = function() {
        let arr = this.value.slice();
        let min = getMin(this.value);
        let max = getMax(this.value);

        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                let val = arr[i][j];
                arr[i][j] = ( val - min ) / ( max - min);
            }
        }
        return arr;
    }

    function flat(m) {
        let depth = 1;
        return m.reduce( function(flat, toFlatten){
            return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
        });
    }

    /**
     * 
     * @param {array[][]} m
     * @returns smallest value of the array 
     */
    function getMin( m ) {
        let smallest = 9999;
        let flatened = flat( m );
        for( let i = 0; i < flatened.length; i++) {
            if( flatened[i] < smallest) smallest = flatened[i];
        }

        return smallest;
    }

    /**
     * 
     * @param {array[][]} m
     * @returns biggest value of the array 
     */
    function getMax( m ) {
        let biggest = -9999;
        let flatened = flat( m );
        for( let i = 0; i < flatened.length; i++) {
            if( flatened[i] > biggest) biggest = flatened[i];
        }

        return biggest;
    }

    function static_fn() {
        console.log('static fn  called');
    }

    return {
        Matrix : Matrix,
        print : static_fn
    }
})();

var p = new Matrix.Matrix();
p.init();
p.create(3);
p.print();
console.table(p.normalize());
