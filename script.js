const calculatorScreen=document.querySelector('.calculator-screen')
const numbers=document.querySelectorAll(".number")
const operators=document.querySelectorAll(".operator")
const equalSign=document.querySelector('.equal-sign')
const updateScreen=(number)=>{
	calculatorScreen.value=number
} 

const inputNumber=(number)=>{
	if (currentInput==='0'){
		currentInput=number
	}
	else{
		currentInput += number
	}
}
const inputOperator=(operator)=>{
	prevInput=currentInput
	calculationOperator=operator
	currentInput='0'
}
const calculate=()=>{
	let result=0
	switch(calculationOperator){
		case '+':
		 result=parseInt(prevInput)+parseInt(currentInput)
		 break;
		case '-':
		 result=parseInt(prevInput)-parseInt(currentInput)
		 break;
		case '*':
		 result=parseInt(prevInput)*parseInt(currentInput)
		 break;
		case '/':
		 result=parseInt(prevInput)/parseInt(currentInput)
		 break;
		default:
		 return
	}
	currentInput=result.toString()
	calculationOperator=''
}
equalSign.addEventListener('click',()=>{
	calculate()
	updateScreen(currentInput)
})
operators.forEach((operator)=>{
	operator.addEventListener('click',(event)=>{
		inputOperator(event.target.value)
	})
})
numbers.forEach((number)=>{
 number.addEventListener('click',()=>{
      inputNumber(event.target.value)
      updateScreen(currentInput)
 })
})
let prevInput='0'
let calculationOperator=''
let currentInput='0'