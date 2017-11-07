console.clear();

var btn = document.querySelector('#clickMe');

var clicks = Rx.Observable.fromEvent(btn, 'click');

// var open = Rx.Observable.interval(1000);

/**
 * Это типо сборник событий, через определенное время выкидывает из буфера все значения
 */
clicks
    .startWith(0)
    .scan((s) => s + 1)
    // .buffer(open)
    .buffer(clicks.throttle(1000))
    .forEach(x => send(x));

function send(x) {
    console.log(x);
}