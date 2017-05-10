//https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
const requestStream = Rx.Observable.just('https://api.github.com/users');
requestStream.subscribe(requestUrl=> {
    //manually create
    //A Promise is simply an Observable with one single emitted value. Rx streams go beyond promises by allowing many returned values.
    const responseStream = Rx.Observable.create(observer=> {
        fetch(requestUrl)
            .then((res, done)=> {
                if (!done) {
                    observer.onNext(res)
                } else {
                    observer.onCompleted()
                }
            })
            .catch(err=>observer.onError(err))
    })
})

//automatically
//"metastream": a stream of streams
const responseMetastream = requestStream
    .map(requestUrl=> {
        return Rx.Observable.fromPromise(fetch(requestUrl));
    });

const responseStream = requestStream
    .flatMap(requestUrl=> {
        return Rx.Observable.fromPromise(fetch(requestUrl));
    });