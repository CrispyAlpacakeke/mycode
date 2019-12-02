var proc = document.querySelector('.cal-process span');
var equal = document.querySelector('.cal-cell.equal');
var cell = document.querySelectorAll('.cal-cell');
var result = document.querySelector('.cal-result span');
var label = false;
var value = [
            '(',')','%','C',
            '7','8','9','/',
            '4','5','6','*',
            '1','2','3','-',
            '0','.','=','+',
            ]

for(var i=0;i<cell.length;i++){
    cell[i].index = i;
    cell[i].dataset.value = value[i];       
    var valueStr = '';
    var label = false;
    cell[i].addEventListener('click',function(){   
        if(!isNaN(this.dataset.value) || this.dataset.value == '.'){
            if(valueStr.indexOf('.') != -1){
                if(this.textContent != '.'){
                    if(label){
                        result.textContent = '0.';
                        valueStr = '0.';
                        result.textContent += this.textContent;
                        valueStr += this.dataset.value;  
                        label = false;
                    }
                    else{
                        result.textContent += this.textContent;
                        valueStr += this.dataset.value;         
                    }                    
                }
                else{

            }            
            console.log(label);
        }
        else{
            if(this.textContent == '='){
                valueStr = '('+valueStr+')';
                console.log(valueStr);
                proc.textContent = result.textContent;
                result.textContent = eval(valueStr);
                label = true;
            }  

            else{
                result.textContent += this.textContent;
                valueStr += this.dataset.value;            
                label = false;
            } 
        }
        if(this.textContent == 'C'){
            proc.textContent = '';
            result.textContent = '';
            valueStr = '';
        }
    })        
}        
 
