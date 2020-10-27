import {replaceConsoleLog} from "../browser/console.log";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";


replaceConsoleLog();

/*
 const firstObservable =  Observable.of('value');
 firstObservable.subscribe(
 streamValue => console.log(streamValue)
 );

 firstObservable.subscribe(
 streamValue => console.log(streamValue)
 );
 */

/*
const customObservable = new Observable(
    observer => {
        let tick = 0;
        const intervalRef = setInterval(
            () => {
                if (tick == 1) {
                    observer.complete()
                } else {
                    observer.next(tick++);
                }

            },
            1000
        );
        return () => {
            clearInterval(intervalRef);
            console.log('end stream');
        }
    }
);

const customObservableSubscription = customObservable.subscribe(
    streamValue => {

        console.log(`customObservable stream value: ${streamValue}`);
    }
);


setTimeout(
    () => {
        const customObservableSubscription = customObservable.subscribe(
            streamValue => {
                console.log(`customObservable stream value2: ${streamValue}`);
            }
        );
        setTimeout(
            () => {
                customObservableSubscription.unsubscribe();
            }, 3000
        );
    }, 5000
);


setTimeout(
    () => {
        customObservableSubscription.unsubscribe();
    }, 3000
);*/
