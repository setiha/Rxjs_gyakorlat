import { replaceConsoleLog } from '../browser/console.log';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delayWhen';

replaceConsoleLog();

// const firstObservable = Observable.of('value');
// firstObservable.subscribe(
//     streamValue => console.log(streamValue)
// );
// firstObservable.subscribe(
//     streamValue => console.log(streamValue)
// );

// const customObservable = new Observable<number>(
//     observer => {
//         let tick = 0;
//         const intervalRef = setInterval(
//             () => {
//                 if (tick == 1) {
//                     observer.complete();
//                 } else {
//                     observer.next(tick++);
//                 }
//             },
//             1000
//         );
//
//         return () => {
//             clearInterval(intervalRef);
//             console.log('end stream');
//         };
//     }
// );
// const customObservableSubscription = customObservable.subscribe(
//     streamValue => {
//         console.log(`customObservable stream value: ${streamValue}`);
//     }
// );
// setTimeout(() => {
//     const customObservableSubscription = customObservable.subscribe(
//         streamValue => {
//             console.log(`customObservable stream value2: ${streamValue}`);
//         }
//     );
//
//     setTimeout(() => {
//         customObservableSubscription.unsubscribe();
//     }, 3000);
//
// }, 5000);

// setTimeout(() => {
//     customObservableSubscription.unsubscribe();
// }, 3000);

// // ez a serviceben lenne
// const firstSubject = new Subject();
// // serviceben kezelem rogton az erteket
// const subscription = firstSubject.subscribe(
//     streamValue => {
//         console.log(`Subject stream value: ${streamValue}`);
//     }
// );
// let tick = 0;
// // server adatkuldes emulalas
// setInterval(() => {
//         firstSubject.next(tick++);
//         if (tick === 3) {
//             subscription.unsubscribe();
//         }
//     }
//     , 1000);
//
// // componentbe feliratkozo
// setTimeout(
//     () => {
//         firstSubject.subscribe(
//             streamValue => {
//                 console.log(`Second subscriber stream value: ${streamValue}`);
//             }
//         );
//     },
//     5000
// );

// const firstBehaviorSubject = new BehaviorSubject<string>('stored value');
// firstBehaviorSubject.subscribe(
//     streamValue=>{
//         console.log(`Behavior subject stream value: ${streamValue}`);
//     }
// );
// firstBehaviorSubject.next('second value');
// firstBehaviorSubject.subscribe(
//     streamValue=>{
//         console.log(`Behavior subject stream value2: ${streamValue}`);
//     }
// );

// const firstReplaySubject = new ReplaySubject(5);
// firstReplaySubject.subscribe(
//     streamValue => {
//         console.log(`Replay subject stream value: ${streamValue}`);
//     }
// );
// console.log('subscribe');
// let tick = 0;
// const intervalRef = setInterval(() => {
//     firstReplaySubject.next(tick++);
//     if (tick === 6) {
//         firstReplaySubject.subscribe(
//             streamValue => {
//                 console.log(`Second subscriber stream value: ${streamValue}`);
//             }
//         );
//     }
//     if (tick === 10) {
//         clearInterval(intervalRef);
//     }
// }, 1000);


// const of = Observable.of<any>({ name: 'Someone' }, [99, 22, 553], () => {return 'function result string';});
// of.subscribe(
//     val => {
//         if (val instanceof Function) {
//             console.log(val());
//         } else {
//             console.log(val);
//         }
//     }
// );

// const from = Observable.from(['one', 'two', '...']);
// from.subscribe(
//     streamValue => {
//         console.log(`from stream value: ${streamValue}`);
//     }
// );

// // map operator
// const timer = new TimerObservable(1000, 1000);
// // timer.subscribe(
// //     tick => console.log(`timer tick: ${tick}`)
// // );
// // const mappedTimer = timer.map(
// //     tick => {
// //         return `tick: ${tick}`;
// //     }
// // );
// //
// // mappedTimer.subscribe(
// //     tick => console.log(tick)
// // );
//
// timer
//     .map(
//         tick => {
//             return `tick: ${tick}`;
//         }
//     )
//     .subscribe(
//         tick => console.log(tick)
//     );

// // mapTo operator
// const timer = new TimerObservable(1000, 1000);
// timer
//     .mapTo('value')
//     .subscribe(
//         tick => console.log(tick)
//     );

// // flatMap operator
// new TimerObservable(5000).flatMap(
//     tick => {
//         return Observable.of('flatMap value');
//     }
// ).subscribe(
//     streamValue => {
//         console.log(`flatMap stream value: ${streamValue}`);
//     }
// );

// const timer = new TimerObservable(2000, 2000);
// new TimerObservable(5000)
//     .map(
//         tick => {
//             console.log('call map operator');
//             return tick;
//         }
//     )
//     .flatMap(
//         tick => {
//             console.log('call flatMap operator');
//             return timer;
//         }
//     )
//     .map(
//         tick => {
//             console.log('call second map operator');
//             return `mapped tick value: ${tick}`;
//         }
//     )
//     .subscribe(
//         streamValue => {
//             console.log(`flatMap stream value: ${streamValue}`);
//         }
//     );

// // skip + first operator
// new TimerObservable(1000, 1000)
//     .skip(3)
//     .first()
//     .subscribe(
//         tick => console.log(`first operator stream value: ${tick}`)
//     );

// // do operator
// new TimerObservable(1000, 1000)
//     .do(
//         tick => {
//             console.log(`first do: ${tick}`);
//         }
//     )
//     .map(
//         tick => `mapped new tick value: ${tick}`
//     )
//     .do(tick => {
//         console.log(`second do: ${tick}`);
//     })
//     .subscribe(
//         streamValue => console.log(`stream value: ${streamValue}`)
//     );

// // reduce
// const source = Observable.of(1, 2, 3, 4)
//     .reduce(
//         (accumlator, val) => {
//             console.log(`accumlator value: ${accumlator}`);
//             console.log(`value: ${val}`);
//             console.log('------');
//             return accumlator + val;
//         }, -2
//     );
// //output: Sum: 10'
// const subscribe = source.subscribe(val => console.log('Sum:', val));

// // share operator (multicasting)
// const timer = new TimerObservable(1000,1000).share();
// timer.subscribe(
//     tick=>console.log(`first timer subscriber: ${tick}`)
// );
// setTimeout(
//     ()=>{
//         timer.subscribe(
//             tick=>console.log(`second timer subscriber: ${tick}`)
//         );
//     },4000
// );

// retry
// let source = Observable.interval(1000)
//     .flatMap(
//         tick => {
//             if (tick > 3) {
//                 return Observable.throw(new Error('Error'));
//             } else {
//                 return Observable.of(tick);
//             }
//         }
//     )
//     .retry(2)
//     .catch(
//         error => {
//             console.log(`catch operator error: ${error}`);
//             // return Observable.of({ oldError: error, newError: 'someone' });
//             return Observable.of(error);
//         }
//     );
//
// source.subscribe(
//     val => {
//         if (val instanceof Error) {
//             console.log(`subscriber value detect error: ${JSON.stringify(val)}`);
//         } else {
//             console.log(`subscriber value: ${val}`);
//         }
//     },
//     error => {
//         console.log(`subscriber error: ${JSON.stringify(error)}`);
//     }
// );

// retryWhen
let source = Observable.interval(1000)
    .map(
        tick => {
            if (tick > 2) {
                throw new Error('New error');
            } else {
                return tick;
            }
        }
    )
    .retryWhen(
        error => {
            return error.do(val => console.log(`val: ${val}`))
            // .delay(1000);
                .delayWhen(
                    val => {
                        // do nothing...
                        console.log('call delayWhen');
                        return Observable.timer(3000);
                    }
                )
        }
    );

source.subscribe(
    val => {
        console.log(`subscriber value: ${val}`);
    },
    error => {
        console.log(`subscriber error: ${JSON.stringify(error)}`);
    }
);