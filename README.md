# ngConfirm
Confirmation box for AngularJs simply and easily.

---

### Result
![alt tag](https://s24.postimg.org/c3fhbxhrp/confirm.jpg)

### Install (gitHub)
```
git clone https://github.com/ericferreira1992/ngConfirm
```
### What he does?
* Allows you to enter confirmations before running an ng-click event
* Allows you to enter confirmations directly into the source code, before executing a line of code.

---

Directives/Attrs		| Description
----					| ----
`ng-confirm`		    | Main directive. In it you will enter with the question that will be asked for the user responds.(ex .: ``` <button ng-confirm="Are you sure?" ng-click="send()"></button> ```).
`ok-btn`(optional)      | Name for POSTIVE option (ex .: ``` <buton ng-confirm="Are you sure?" ok-btn="Yes"></button> ```).
`cancel-btn`(optional)  | Name for NEGATIVE option (ex .: ``` <buton ng-confirm="Are you sure?" ok-btn="No"></button> ```).

### Usage
**Include in header your Html**:
```html
  <link href="css/ngConfirm.min.css" rel="stylesheet" type="text/css"/>
  <script src="js/ngConfirm.min.js"></script>
```

### Example usage
#### HTML
```html
    <button ng-confirm="Are you sure?" ok-btn="Yes" cancel-btn="No" ng-click="send()">Send</button>
```
#### Controller (Service provider)
```javascript
    $scope.send(){
		ngConfirm.confirm('Are you sure',
		function(){
			alert('You clicked on the POSITIVE option');
		},
		function(){
			alert('You clicked on the NEGATIVE option');
		})
	};
```
