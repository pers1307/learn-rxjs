console.clear();

/**
 * Cold Observable
 *
 * Если так сделать, то b инициирует новое поведение Observable
 * и тем самым будет исполняться независимо и не синхронно
 * @type {boolean}
 */
var clock = Rx.Observable.interval(1000).take(10).map(x => x + 1);

/**
 * Hot Observagit
 *
 * При добавлении этой строки оба subscribe,
 * будут выплевывать одинаковое значение, несмотря на то что подписка произошла позже
 */
    .publish()
    .refCount();

clock.subscribe(i => console.log('a: ' + i));

setTimeout(function () {
    clock.subscribe(i => console.log('  b: ' + i));
}, 4500);