app.service('notationCalculateService', function() {
    this.calculatePostfix = function(rawExpression){

		var buildResult = [];
        var expressionArray = rawExpression.split(" "); //splitting string based on spaces between characters.
        //evaluating each expression provided
        for(var i = 0; i < expressionArray.length; i++) {
        	//checking for blank entries
        	if(expressionArray[i] =='')
        		continue;
            //check for operands
            if(!isNaN(parseFloat(expressionArray[i]))) {
                buildResult.push(expressionArray[i]);
            } else {
				var a = buildResult.pop();
				var b = buildResult.pop();
				var operator = expressionArray[i];
				switch(operator){
					case "+":
						buildResult.push(parseFloat(a) + parseFloat(b));
						break;
					case "-":
						buildResult.push(parseFloat(a) - parseFloat(b));
						break;
					case "*":
						buildResult.push(parseFloat(a) * parseFloat(b));
						break;
					case "/":
						//checking for division by 0
						if(parseFloat(b) === 0) {
							return "Division by zero not allowed. Please enter valid number.";
						}
						buildResult.push(parseFloat(a) / parseFloat(b));
						break;
                    case "%":
						buildResult.push(parseFloat(a) % parseFloat(b));
						break;
                    case "^":
                        buildResult.push(Math.pow(parseInt(b), parseInt(a)));
						break;
				}
            }
        }
		//check if result is number and not empty
        if(buildResult.length != 1 || isNaN(buildResult[0])) {
            return "Invalid input. Please provide numbers and operators only.";
        } else
        return buildResult.pop();
    }
});
