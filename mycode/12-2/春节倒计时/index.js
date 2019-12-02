function count(){
    //获取时间差
    let ms = new Date("2020,Jan 25 00:00:00") - new Date();
    //计算天数
    let _days = Math.floor(ms/1000/60/60/24);
    //计算小时
    let _hours = Math.floor(ms/1000/60/60%24);
    //计算分钟
    let _mins = Math.floor(ms/1000/60%60);
    //计算秒
    let _secs = Math.floor(ms/1000%60);

    //获取元素
    let days = $('.days');
    let hours = $('.hours');
    let mins = $('.mins');
    let secs = $('.secs');

    //赋值
    days.innerText = _days.toString().padStart(2,'0');
    hours.innerText = _hours.toString().padStart(2,'0');
    mins.innerText = _mins.toString().padStart(2,'0');
    secs.innerText = _secs.toString().padStart(2,'0');    
}
//初始化
count();

//计时器
setInterval(count,1000)

//封装函数
//获取元素函数
function $(sel,isAll){
    if(isAll){
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel);
}

