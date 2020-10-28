import {replaceConsoleLog} from "../browser/console.log";
import "rxjs/add/observable/of";
import {ReplaySubject} from "rxjs/ReplaySubject";


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

//subject
/*
 const firstSubject = new Subject();

 const subscription = firstSubject.subscribe(
 streamValue => {
 console.log(` Subject streamValue : ${streamValue}`);
 }
 );

 let tick = 0;

 setInterval(() => {
 firstSubject.next(tick++);
 if (tick === 3) {
 subscription.unsubscribe();
 }

 }, 1000);

 setTimeout(() => {
 firstSubject.subscribe(
 streamValue => {
 console.log(`Second subscriber stream value: ${streamValue}`);
 }
 )
 }, 5000);*/

/*
 const firstBehaviorSubject = new BehaviorSubject<string>('stored value');
 firstBehaviorSubject.subscribe(
 streamValue => {
 console.log(`Behavior subject stream value: ${streamValue}`);
 }
 )
 firstBehaviorSubject.next('second value');
 firstBehaviorSubject.subscribe(
 streamValue => {
 console.log(`Behavior subject stream value2: ${streamValue}`);
 }
 );*/

// a replay subject-hasonlo a behavior subjecthez de nincsen init erteke,
//es meg tudjuk mondani neki hogy hany utolso allapotot taroljon

const firstReplaySubject = new ReplaySubject(3);

firstReplaySubject.subscribe(
    streamValue => {
        console.log(`Replay subject stream value: ${streamValue}`);
    }
);

console.log('subscribe');
let tick = 0;
const intervalRef = setInterval(
    () => {
        firstReplaySubject.next(tick++);
        if (tick === 6) {
            firstReplaySubject.subscribe(
                streamValue => {
                    console.log(`Second subscriber stream value: ${streamValue}`)
                }
            );
        }
        if(tick === 10){
            clearInterval(intervalRef);
        }
    },1000
);
