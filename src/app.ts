import { replaceConsoleLog } from '../browser/console.log';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

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


