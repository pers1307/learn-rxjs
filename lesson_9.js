console.clear();

var ret = [1];

var source = Rx.Observable.of(ret);

source.subscribe((x) => console.log(x));

setTimeout(function () {
    ret = [10];
}, 1000);