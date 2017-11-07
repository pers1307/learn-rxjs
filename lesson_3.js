console.clear();

/**
 * Промис отрабатывает только один раз
 * Не является отменяемым
 */
var promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(42);
    }, 500);

    setTimeout(() => {
        resolve(40);
    }, 1000);
});

promise.then(x => console.log(x));


var source = Rx.Observable.create((observer) => {
    setTimeout(() => {
        observer.onNext(42);
    }, 500);
    
    console.log('observable started');
});

source.forEach(x => console.log(x));