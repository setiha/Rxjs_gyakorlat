///<reference path="../node_modules/rxjs/operator/reduce.d.ts"/>
import {replaceConsoleLog} from "../browser/console.log";
import "rxjs/add/observable/of";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/first";
import "rxjs/add/operator/skip";
import "rxjs/add/operator/do";
import "rxjs/add/operator/share";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/delayWhen";
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

/*const timer = new TimerObservable(1000, 1000);*/
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


//flatMap operator

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

/*
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
 );*/
/*
 // skip + first operator
 new TimerObservable(1000,1000)
 .skip(3)
 .first()
 .subscribe(
 tick => console.log(`first operator stream value : ${tick}`)
 );*/
/*

 // do operator

 new TimerObservable(1000,1000)
 .do(
 tick => {
 console.log(`first do: ${tick}`)
 }
 )
 .map(
 tick => `mapped new tick value: ${tick}`
 )
 .do(
 tick => {
 console.log(`second do: ${tick}`)
 }
 )
 .subscribe(
 streamValue => console.log(`stream value: ${streamValue}`)
 );
 */

/*
 //mergeMap
 const getData = (param) => {
 return of(`retrieved new data with param ${param}`).pipe(
 delay(1000)
 )
 }

 from([1,2,3,4]).pipe(mergeMap(param => getData(param))).subscribe(val => console.log(val));
 */

/*const getData = (param) => {
 return Observable.of(`retrieved new data with param ${param}`)
 };

 Observable.from([1,2,3,4]).mergeMap(param => getData(param)).subscribe(val => console.log(val));*/

/*
 // share operator

 const timer = new TimerObservable(1000,1000).share();
 timer.subscribe(
 tick => console.log(`first timer subscriber: ${tick}`)
 );

 setTimeout(
 () =>{
 timer.subscribe(
 tick => console.log(`second timer subscriber: ${tick}`)
 )
 },4000
 )*/

/*
 //catch, throw error, retry
 let source = Observable.interval(1000)
 .flatMap(
 tick => {
 if (tick > 3) {
 return Observable.throw(new Error('Error'));
 } else {
 return Observable.of(tick);
 }
 }
 )
 .retry(2)
 .catch(
 error => {
 console.log(`catch operator error: ${error}`);
 return Observable.of(error);
 }
 );

 source.subscribe(
 val => {
 if(val instanceof Error){
 console.log(`subscriber value detect error: ${val}`);
 }else{
 console.log(`subscriber value: ${val}`);
 }
 },
 error => {
 console.log(`subscriber error: ${error}`)
 }
 )
 */

//retrywhen
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
              //.delay(1000);
              .delayWhen(
                  val => {
                      console.log('call delayWhen');
                      return Observable.timer(3000);
                  }
              )
      }
    );

source.subscribe(
    valueStream => {
            console.log(`subscriber value: ${valueStream}`)
    },
    error => {
        console.log(`subscriber error: ${error}`)
    }
)