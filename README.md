# ngConfirm
Confirmation box for AngularJs simply and easily.

---

### Result
![alt tag](https://s27.postimg.org/6li016643/confirm.jpg)

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
`title`(optional)  		| Name for the title of the confirmation box (ex .: ``` <buton ng-confirm="Are you sure?" title="Confirmation"></button> ```).

### Usage
**Include in header your Html**:
```html
  <link href="css/ngConfirm.min.css" rel="stylesheet" type="text/css"/>
  <script src="js/ngConfirm.min.js"></script>
```

### Example usage
#### On HTML
```html
    <button ng-confirm="Are you sure?" ok-btn="Yes" cancel-btn="No" ng-click="send()">Send</button>
```
#### On Controller (First way)
```javascript
    $scope.send = function(){
		ngConfirm.confirm('Are you sure',
		function(){
			alert('You clicked on the POSITIVE option');
		},
		function(){
			alert('You clicked on the NEGATIVE option');
		})
	};
```
#### On Controller (Second way)
```javascript
    $scope.send = function(){
		ngConfirm.confirm({
			title: 'Confirmation',
			msg: 'Are you sure?',
			okBtn: 'Yes',
			cancelBtn: 'No',
		},
		function(){
			alert('You clicked on the POSITIVE option');
		},
		function(){
			alert('You clicked on the NEGATIVE option');
		})
	};
```

[Donate to help](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ericferreira1992%40gmail%2ecom&lc=BR&item_name=Eric%20Github&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

[Send email to support](ericferreira1992@gmail.com)