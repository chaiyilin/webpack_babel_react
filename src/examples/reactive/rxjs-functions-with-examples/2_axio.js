import Rx from 'rxjs/Rx';
import axios from 'axios';

function getQiitaItems() {
    return Rx.Observable.fromPromise(axios.get('http://jsonplaceholder.typicode.com/users'));
}

getQiitaItems()
    .subscribe((res) => {
        res.data.forEach((item) => {
            console.log(item.title);
        });
    });