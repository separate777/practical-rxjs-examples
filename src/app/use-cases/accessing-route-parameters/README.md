## Problem
When a user navigates to a route, the route may contain data in the form of parameters (either query parameters or route parameters). 
This data can be used to display information on the page or to fetch additional data from a backend service.


## Solution with RxJs
The Angular Router provides an Observable that emits a new value whenever the route parameters change.
This Observable can be subscribed to in a component to react to changes in the route parameters.


## Notes
- Sometimes only the current state of the route parameters is needed. In this case, the `snapshot` property of the ActivatedRoute can be used to access the current route parameters synchronously.
- Using the observables is especially useful, when the component needs to react to changes in the route parameters, this is the case when the same component is reused for different routes (route changes, but component is not destroyed and recreated).
- The ActivatedRoute provides access to the route parameters, query parameters, and the URL fragments of the current route.
