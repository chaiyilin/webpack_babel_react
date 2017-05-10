"use strict";

// Helper Method
const ENDPOINT = 'users',
    ROOT     = 'https://jsonplaceholder.typicode.com';

const makeRequest = function makeRequest(path, item) {
    return new Promise(function(resolve, reject) {
        // Assumes jQuery
        path ? (path = '/' + path) : path = '/';
        item ? (item = '/' + item) : item = '/';
        const url = ROOT + path + item;

        $.getJSON(url)
            .done(function (data) {
                resolve(data);
            })
            .fail(function () {
                reject();
            })
    });
};

let source = Rx.Observable.create(function (observer) {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(j => {
            observer.onNext(j);
            observer.onCompleted();
        }).catch(observer.onError);
});

let subscription = source.subscribe(
    function (x) { console.log('onNext: %s', x); },
    function (e) { console.log('onError: %s', e); },
    function () { console.log('onCompleted'); }
);




// BOILERPLATE
const PROMISE = makeRequest(ENDPOINT),
    source =
        Rx.Observable.fromPromise(PROMISE)
            .flatMap(Rx.Observable.from);

source.
map((user) => user.website).
subscribe(value => {
    const row = document.createElement('tr');
    row.innerHTML = value;

    $('#email-table-body').append(row)
    console.log(value);
})