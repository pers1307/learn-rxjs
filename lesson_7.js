console.clear();

var source = Rx.Observable.interval(100).take(10)
    // .map(x => x * 2);
    // .map(x => Rx.Observable.timer(500).map(() => x))
    // .mergeAll();
    .flatMap(x => Rx.Observable.timer(500).map(() => x))

source.subscribe(x => console.log(x));