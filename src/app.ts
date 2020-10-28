import {replaceConsoleLog} from "../browser/console.log";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/mergeMap";


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

/*
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
 */
/*const of = Observable.of<any>({name: 'Someone'}, [99,22,553], () => {return 'function result string';});
 of.subscribe(
 val => {
 if(val instanceof Function){
 console.log(val());
 }else{
 console.log(val);
 }
 }
 );*/

/*
 const from = Observable.from(['one', 'two', '...']);
 //tombot var es a tombot fogja felbontani es ugy irja ki

 from.subscribe(
 streamValue => {
 console.log(`from stream value: ${streamValue}`);
 }
 )*/

const timer = new TimerObservable(1000, 1000);
/*
 timer.subscribe(
 tick => console.log(`timer tick: ${tick}`)
 );
 */

/*const mappedTimer = timer.map(
 //az adatot modositja asubscriber azt kapja meg
 tick => {
 return `tick: ${tick}`
 }
 );
 mappedTimer.subscribe(
 tick => console.log(tick)
 );*/
//Timer observable - megfelel a setIntervalnak is es a setTimeoutnak is
// attol fuggoen hany parametert adunk at neki
//1 parameter setTimout
//2 parameter set interval -elso elindulas masodik a tick

/*timer
 .map(
 tick => {
 return `tick: ${tick}`;
 }
 )
 .subscribe(
 tick => console.log(tick)
 );*/

//mapTo operator
/*const newTimer = new TimerObservable(1000, 1000);
 newTimer
 .mapTo('value')
 .subscribe(
 tick => console.log(tick)
 );*/


//flat map operator

/*new TimerObservable(5000).flatMap(
 //a flatMap operatorral elkapjuk es modositjuk az ellott tick-et.
 tick => {
 return  Observable.of('flatMap value');
 }
 ).subscribe(
 streamValue => {
 console.log(`flatMap stream value: ${streamValue}`);
 }
 );*/

const newTimer = new TimerObservable(2000, 2000);

new TimerObservable(5000)
    .map(
        tick => {
            console.log('call map operator');
            return tick;
        }
    )
    .flatMap(
        tick => {
            console.log('call flatMap operator');
            return newTimer;
        }
    )
    .map(
        tick => {
            console.log('call second map operator');
            return `mapped tick value: ${tick}`;
        }
    )
    .subscribe(
    streamValue => {
        console.log(`flatMap stream value: ${streamValue}`);
    }
);