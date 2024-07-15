# RxJs Examples

## Update data via retriggered http request

## map incoming data via http request

## work with forms

## work with route data

## Using the async pipe

## unsubscribe on destroy

## The stateful service

## Error handling via rxjs

## clean up subscriptions on destroy

## the "Promise" Observable (take(1))

## show loading while request happens

## Always provide the latest value (ReplaySubject / BehaviourSubject)

## combine the values of multiple streams

---

# RxJs Pitfalls

## open subscriptions

## Nested subscriptions

## calling unsubscribe on subjects

## passing subjects instead of observables

## Not using the buffer size on replay subjects

---

# RxJs Operators

### map

### switchMap

    - tap
    - map
    - filter
    - switchMap
    - startWith
    - combineLatest
    - takeUntil
    - take
    - debounceTime
    - catchError
    - fromEvent

## RXJS Examples

This repository contains examples of rxjs operators and their typical use cases in an angular application.

One purpose of this repository is to be used as a "library" for rxjs use cases to be used as a reminder when a programming problem comes up that could be solved with rxjs.

The other purpose is to have a playground to understand a specific operator better and try it. For this purpose each of the operators is contained in its own folder showing its functionality in the most simple way (logging events to the console).

I am aware that There is a plethora of ressources online trying to teach you rxjs.
Just to name a few:

- https://playcode.io/rxjs
- https://www.learnrxjs.io/
- https://angularindepth.com/
- https://rxmarbles.com/
- https://thinkrx.io/

This repository doesn't try to replace those ressources. It tries to focus on the most common rxjs tools (operators) and use cases in an angular application. Its not complete (there are more operators), its just containing everything I used after almost 3 years of using this library in an angular context. Feel free to fork this repository and add operators / use cases.


