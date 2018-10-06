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
                this.value[i][j] = Math.random();        
            }
        }
    }

    Matrix.prototype.print = function(){
        console.table(this.value);
    }

    function static_fn() {
        console.log('static fn  called');
    }

    return {
        Matrix : Matrix,
        print : static_fn
    }
})();

Matrix.print();
var p = new Matrix.Matrix();

