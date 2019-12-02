//判断用户输入的内容格式是否正确
//阻止提交
let submitBtn = document.querySelector('#submit')

let emailIpt = document.querySelector('#email')
let telIpt = document.querySelector('#tel')
let usernameIpt = document.querySelector('#username')
let psd1Ipt = document.querySelector('#password1')
let psd2Ipt = document.querySelector('#password2')
let checkIpt = document.querySelector('.checkbox input')

let emailHelp = document.querySelector('#email-helpBlock')
let telHelp = document.querySelector('#tel-helpBlock')
let usernameHelp = document.querySelector('#username-helpBlock')
let psd1Help = document.querySelector('#password1-helpBlock')
let psd2Help = document.querySelector('#password2-helpBlock')

let pass = false

function validate(e,ipt,eHelp,text){
    if(!e){
        //如果验证失败
        ipt.parentElement.classList.remove('has-success')
        ipt.parentElement.classList.add('has-error')
        eHelp.innerHTML = text;
    }else{
        ipt.parentElement.classList.add('has-success')
        ipt.parentElement.classList.remove('has-error')
        eHelp.innerHTML = ''
    }
}
emailIpt.onblur = function(){
    let email = this.value;
    let emailPass = /^\w{2,}@\w{2,}\.[A-Za-z0-9]{2,}$/.test(email)
    validate(emailPass,this,emailHelp,'邮箱格式错误')
}

telIpt.onblur = function(){
    let tel = this.value;
    let telPass = /^1[3-9]\d{9}$/.test(tel)
    validate(telPass,this,telHelp,'手机号码格式错误')
}
//用户名由字母、数字、下划线组成，最少6位，最多30位
usernameIpt.onblur = function(){
    let username = this.value;
    let usernamePass = /^[\u4E00-\u9FA5A-A-Za-z0-9_]{6,29}$/.test(username)
    validate(usernamePass,this,usernameHelp,'用户名格式错误')
}
psd1Ipt.onblur = function(){
    let psd1 = this.value;
    let psd1Pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/.test(psd1)
    validate(psd1Pass,this,psd1Help,'密码格式错误')
}
psd2Ipt.onblur = function(){
    let psd2Pass = this.value == psd1Ipt.value
    validate(psd2Pass,this,psd2Help,'两次密码不一致')
}

submitBtn.onclick = function(e){
    let emailPass = /^\w{2,}@\w{2,}\.[A-Za-z0-9]{2,}$/.test(emailIpt.value)
    let telPass = /^1[3-9]\d{9}$/.test(telIpt.value)
    let usernamePass = /^[\u4E00-\u9FA5A-A-Za-z0-9_]{6,29}$/.test(usernameIpt.value)
    let psd1Pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/.test(psd1Ipt.value)
    let psd2Pass = psd2Ipt.value == psd1Ipt.value
    pass = emailPass && telPass && usernamePass && psd1Pass && psd2Pass && checkIpt.checked
    if(!pass){
        e.preventDefault()
    }
}