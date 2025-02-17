function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = "*") {
    return function(param = "special"){
      return `You are ${string}${param}${string}!`;
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }, 
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(startingInt, functionArray){
    for (let i = 0; i < functionArray.length; i++) {
        startingInt = functionArray[i](startingInt);
    }
    return startingInt;
}
