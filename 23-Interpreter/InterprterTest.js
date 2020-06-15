/**
 * 抽象表达式（Abstract Expression）角色：定义解释器的接口，约定解释器的解释操作，主要包含解释方法 interpret()。
 * 终结符表达式（Terminal    Expression）角色：是抽象表达式的子类，用来实现文法中与终结符相关的操作，文法中的每一个终结符都有一个具体终结表达式与之相对应。
 * 非终结符表达式（Nonterminal Expression）角色：也是抽象表达式的子类，用来实现文法中与非终结符相关的操作，文法中的每条规则都对应于一个非终结符表达式。
 * 环境（Context）角色：通常包含各个解释器需要的数据或是公共的功能，一般用来传递被所有解释器共享的数据，后面的解释器可以从这里获取这些值。
 * 客户端（Client）：主要任务是将需要分析的句子或表达式转换成使用解释器对象描述的抽象语法树，然后调用解释器的解释方法，当然也可以通过环境角色间接访问解释器的解释方法。
 */

class Expression {
    interpret(context) {

    }
}

class TerminalExpression extends Expression {
    data;
    constructor(data) {
        super();
        this.data = data;
    }

    interpret(context) {
        // console.log(this.data, context, this.data.indexOf(context) >= 0)
        if (this.data.indexOf(context) >= 0) {
            return true;
        }
        return false;
    }
}

class OrExp extends Expression {
    expressionOne = null;
    expressionTwo = null;

    constructor(expressionOne, expressionTwo) {
        super();
        this.expressionOne = expressionOne;
        this.expressionTwo = expressionTwo;
    }

    interpret(context) {
        return this.expressionOne.interpret(context) || this.expressionTwo.interpret(context);
    }
}

class AndExp extends Expression {
    expressionOne = null;
    expressionTwo = null;

    constructor(expressionOne, expressionTwo) {
        super();
        this.expressionOne = expressionOne;
        this.expressionTwo = expressionTwo;
    }

    interpret(context) {
        return this.expressionOne.interpret(context) && this.expressionTwo.interpret(context);
    }
}

let exprOne = new TerminalExpression("123456789");
let exprtwo = new TerminalExpression("abcdefghi");

let orExpr = new OrExp(exprOne, exprtwo);
let andExpr = new AndExp(exprOne, exprtwo);

let dateOne = "123";
let dateTwo = "hi";

console.log(orExpr.interpret(dateOne));
console.log(andExpr.interpret(dateOne));

console.log(orExpr.interpret(dateTwo));
console.log(andExpr.interpret(dateTwo));

