import Rx from 'rxjs/Rx';
import axios from 'axios';

const promise = axios.get('http://jsonplaceholder.typicode.com/users');
const source = Rx.Observable.fromPromise(promise);

source.subscribe(value => {
    console.log(value);
})