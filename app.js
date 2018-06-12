console.log('test');

//First version:
/*slowMath.add(6, 2)
.then((add) => {
    console.log(result);
}).then(slowMath.multiply)*/

slowMath.add(1, 1)
    .then((result) => {
    console.log(result);
slowMath.multiply(result, 2)
    .then((result) => {
    console.log(result);
slowMath.subtract(result, 3)
    .then((result) => {
    console.log(result);
slowMath.add(result, 98)
    .then((result) => {
    console.log(result);
slowMath.remainder(result, 2)
    .then((result) => {
    console.log(result);
slowMath.multiply(result, 50)
    .then((result) => {
    console.log(result);
slowMath.remainder(result, 40)
    .then((result) => {
    console.log(result);
slowMath.add(result, 32)
    .then((result) => {
    console.log(result) 
    setTimeout (function() { 
    console.log(`The final result is ${result}`)}, 1000)
}).catch((err) => {
    console.log(err)
                            })
                        })
                    })
                })
            })
        })
    })
})



