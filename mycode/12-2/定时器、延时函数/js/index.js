//脚本在body的结束标签之前引用，保证页面加载是结构先加载，脚本后加载，防止dom操作时获取不到元素
//在页面结构加载完成后
// window.onload = function(){

// }
//自调用函数
// (function(){
//     //#定时器
//     //创建定时器
//     setInterval(function(){

//     },interval);
//     let _count = 10;
//     let t = setInterval(function(){
//         //清除定时器
//         if(_count<=0){
//             clearInterval(t);            
//         }
//         console.log(_count--);
//     },1000);
//     //#延时函数
//     let p = setTimeout(function(){
//         console.log('呱呱呱')
//     },11000)
// })();

//1、获取元素
//使用ES6中[...[]]方法将nodelist集合转换为数组
let container = $('.container');
let imgs = [...$('.imgs img', true)];
let prev = $('.prev');
let next = $('.next');
let idots = [...$('.idot', true)];
let _curIndex = 0; //记录当前显示图片的下标
let _lastIndex = 0; //当前图片的前一张
let _timer = null; //定时器

//2.点击下一页
next.onclick = function(){
    _curIndex = _curIndex == 5?0:++_curIndex;
    tab();
}

//3.点击上一页
prev.onclick = function(){
    _curIndex = _curIndex == 0?5:--_curIndex;
    tab();
}

//4.点击小圆点切换
idots.forEach(function(el,idx){
    el.onclick = function(){
        _curIndex = idx;
        tab();
    }
})

//5.自动播放
play();

//6.用户体验
// container.onmouseenter = stop;
// container.onmouseleave = play;
container.addEventListener('mouseenter',stop)
container.addEventListener('mouseleave',play)

// => 封装函数
//启动定时器
function play(){
    _timer = setInterval(function() {
        next.onclick();
    }, 2000);
}
//关闭定时器
function stop(){
    clearInterval(_timer);
}
//切换函数
function tab(){
    imgs[_lastIndex].classList.remove('show')
    idots[_lastIndex].classList.remove('sel')
    imgs[_curIndex].classList.add('show');
    idots[_curIndex].classList.add('sel');
    _lastIndex = _curIndex;
}
//封装选择器函数
function $(sel, isAll) {
    //判断是否全选
    if (isAll) {
        return document.querySelectorAll(sel);
    }
    return document.querySelector(sel);
}