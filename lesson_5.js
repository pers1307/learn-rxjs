console.clear();

// var source = [0, 1, 2, 3, 4, 5];
//
// /**
//  * Последовательно обработается все элементы через filter, потом map итд
//  * @type {boolean}
//  */
// var result = source
//     .filter((x, i, arr) => {
//         console.log('filtering ' + x);
//         console.log('is source ' + (arr === source));
//         return x + '!';
//     })
//     .map((x, i, arr) => {
//         console.log('mapping ' + x);
//         console.log('is source ' + (arr === source));
//         return x + '!';
//     })
//     .reduce((r, x, i, arr) => {
//         console.log('reducing ' + x);
//         console.log('is source ' + (arr === source));
//         return r + x;
//     }, '');
//
//
// console.log(result);


var source = Rx.Observable.fromArray([0, 1, 2, 3, 4, 5]);

/**
 * Каждый элемент проходит полную цепочку событий, потом проходит её следующий
 * @type {boolean}
 */
var result = source
    .filter((x) => {
        console.log('filtering ' + x);
        return x + '!';
    })
    .map((x) => {
        console.log('mapping ' + x);
        return x + '!';
    })
    .reduce((r, x) => {
        console.log('reducing ' + x);
        return r + x;
    }, '')
    .subscribe(result => {
        console.log(result);
    });