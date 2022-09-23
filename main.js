var number1, number2, operator, result, answer, True=0, False=0

number1=document.getElementById('number1')
number2=document.getElementById('number2')
operator=document.getElementById('operator')
result=document.getElementById('result')
answer=document.getElementById('answer')
True=document.getElementById('True')
False=document.getElementById('False')

//Random reqem
function randomNumber(min,max){
    var number=Math.floor(Math.random()*(max-min))+min
    return number
}

//Yeni sual
function newQuestion(){
    var operation=['+','-','*',"/"]

    operator.textContent=operation[randomNumber(0,4)] //operator secimi
    number1.textContent=randomNumber(0,50)
    number2.textContent=randomNumber(0,50)

    //Qaliqsiz bolme ucun if else yaradiriq
    if(operator.textContent=='/'){
        while(true){
            number2.textContent=randomNumber(0,50)
            if(number1.textContent%number2.textContent==0){
                break
            }
        }
    }
}

//Seyfe yuklenende yeni sual veren function calisdir
window.onload=function(){
    newQuestion()
}

//Cavab butonu
answer.onclick=function(){
    var ans,n1,n2
    n1=Number(number1.textContent)
    n2=Number(number2.textContent)

    switch(operator.textContent){
        case '+':ans=n1+n2; break
        case '-':ans=n1-n2; break
        case '*':ans=n1*n2; break
        case '/':ans=n1/n2; break
        default:break
    }
    if(result.value==ans){
        True.textContent=Number(True.textContent)+1
    }else{
        False.textContent=Number(False.textContent)+1
    }
    newQuestion()
}