//controller for calculating polish notation.
app.controller('polishCalculatorCtrl', ['notationCalculateService', function(notationCalculateService) {
	this.expression = "";
    this.output = "";
	this.evaluate = function() {
		this.output = notationCalculateService.calculatePostfix(this.expression);
	}

}]);
