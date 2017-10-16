describe('Testing Controller', function(){
	beforeEach(angular.mock.module('polishCalculatorApp'));

    var $controller, $scope, controller;;

    beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    }));

	beforeEach(function() {
      $scope = {};
      controller = $controller('polishCalculatorCtrl', { $scope: $scope });
    });

	it('should return output 9 if the input expression is 4 5 +', function() {
      $scope.expression = '4 5 +';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(9);
    });

    it('should return output 20 if the input expression is 4 5 *', function() {
      $scope.expression = '4 5 *';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(20);
    });

    it('should return output 1 if the input expression is 2 2 /', function() {
      $scope.expression = '2 2 /';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(1);
    });

    it('should return output 1 if the input expression is 4 5 -', function() {
      $scope.expression = '4 5 -';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(1);
    });

	it('should return output 1 if the input expression is -5 6 +', function() {
      $scope.expression = '-5 6 +';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(1);
    });
    it('should return output 3 if the input expression is 10 3 %', function() {
      $scope.expression = '10 3 %';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(3);
    });
    it('should return output 16 if the input expression is 2 4 ^', function() {
      $scope.expression = '2 4 ^';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(16);
    });
	it('should return output 11 if the input expression is 2 3 + 4 4 * -', function() {
      $scope.expression = '2 3 + 4 4 * -';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual(11);
    });
	it('should return "Invalid input. Please provide numbers and operators only." if the input expression is "f t / " ', function() {
      $scope.expression = 'f t / ';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual("Invalid input. Please provide numbers and operators only.");
    });
    it('should return "Invalid input. Please provide numbers and operators only." if the input expression is "5 t / " ', function() {
      $scope.expression = '5 t / ';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual("Invalid input. Please provide numbers and operators only.");
    });
    it('should return "Invalid input. Please provide numbers and operators only." if the input expression is "5 + - *" ', function() {
      $scope.expression = '5 + - * ';
      $scope.output = $scope.postfixEvaluator($scope.expression);
      expect($scope.output).toEqual("Invalid input. Please provide numbers and operators only.");
    });
});
