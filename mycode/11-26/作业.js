let school = {
    name: "山东南翔",
    students: [
        {
            name: '国强子',
            age: 25,
            fav: ['唱歌', '游戏']
        },
        {
            name: '铁锤',
            age: 28,
            fav: ['rap', '游戏']
        }
    ],
    teachers: [
        {
            name: '唐老师',
            age: 45,
            fav: ['挖掘机', '开车']
        },
        {
            name: 'tony老师',
            age: 28,
            fav: ['洗', '剪', '吹']
        }
    ]
}

//1.至少使用两种方法完成上面school对象的深拷贝。可尝试使用函数递归的方式
/*----------------浅拷贝------------------*/
//Object.assign()
function assignShadowCopy(obj) {
    let objCopy = Object.assign({}, obj);
    return objCopy;
}
let school1Copy = assignShadowCopy(school);
//循环

/*----------------深拷贝------------------*/
//JSON
function jsonDeepCopy() {
    return JSON.parse(JSON.stringify(school));
}
let school2Copy = jsonDeepCopy(school);
//递归
function deepCopy(parent, child) {
    child = child || {};
    for (key in parent) {
        if (typeof parent[key] === 'object') {
            child[key] = parent[key].constructor === Array ? [] : {};
            deepCopy(parent[key], child[key]);
        }
        else {
            child[key] = parent[key]
        }
    }
    return child;
}
var school3Copy = deepCopy(school);

//2.给定三个对象模板，创建模板对应的构造函数，通过继承实现。
// let attackBase = {
//     hp:100,
//     mp:100,
//     gjl:10,
//     attack:function(){console.log('攻击对方')}
// }
// let hero = {
//     hp:100,
//     mp:100,
//     gjl:10,
//     attack:function(){console.log('攻击对方')},
//     type:'hero'
// }

// let soldier = {
//     hp:100,
//     mp:100,
//     gjl:10,
//     attack:function(){console.log('攻击对方')},
//     type:'soldier'
// }
function AttackBase(hp, mp, gjl) {
    this.hp = hp;
    this.mp = mp;
    this.gjl = gjl;
    this.attack = function () { console.log('攻击对方') };
}
//继承的时候自定义属性写在最后
function Hero(hp, mp, gjl, type) {
    AttackBase.apply(this, arguments);
    this.type = type;
}
function Soldier(hp, mp, gjl, type) {
    AttackBase.apply(this, arguments);
    this.type = type;
}
var hero = new Hero(100, 100, 10, 'hero');
var soldier = new Soldier(100, 100, 10, 'soldier');

//3.完成一个网页时钟，样式不限。使用setInterval以及Date对象
let min = document.querySelector('.minuteHand')
let hour = document.querySelector('.hourHand')
let sec = document.querySelector('.secondHand')
let list = document.querySelector('.list')
let oCss = document.querySelector('.css')
let html = '';
let css = '';
for (let i = 0; i < 60; i++) {
    html += '<li></li>';
    css += `.wrap ul li:nth-child(${i + 1}){transform:rotate(${(i + 1) * 6}deg);}`
}
list.innerHTML = html;
oCss.innerHTML += css;
function toTime() {
    var oDate = new Date();
    var oSec = oDate.getSeconds();
    var oMin = oDate.getMinutes();
    var oHour = oDate.getHours();
    sec.style.transform = 'rotate(' + oSec * 6 + 'deg)'
    min.style.transform = 'rotate(' + oMin * 6 + 'deg)'
    hour.style.transform = 'rotate(' + oHour * 30 + 'deg)'
}
toTime();
setInterval(toTime, 1000)





//4.http://www.fgm.cc/learn/lesson7/01.html，可以尝试左右滑动模式

var imgs = document.querySelector('.swipper ul')
var swipper = document.querySelector('.swipper')
var span = document.querySelectorAll('.swipper .btn span')
var btns = document.querySelector('.swipper .btn')
var i = 0;
function move(index) {
    if(index == undefined){
        if (i == 4) {
            i = 0;
        }
        imgs.style.transform = `translateX(-${800 * i++}px)`;
        span.forEach(function (el) {
            el.classList.remove('active');
        })
        span[i - 1].classList.add('active');
    }else{
        imgs.style.transform = `translateX(-${800 * index}px)`
        i = index
    }
}
var t = setInterval(move, 1600);
swipper.addEventListener('mouseenter', function () {
    clearInterval(t)
    console.log('enter冒泡')
})
swipper.addEventListener('mouseleave', function () {
    t = setInterval(move, 1600);
    console.log('leave冒泡')
})
span.forEach(function(el){
    el.addEventListener('mouseenter',function(e){
        span.forEach(function (el) {
            el.classList.remove('active');
        })
        this.classList.add('active');
        let curSpan = e.target
        let curIndex = curSpan.dataset.index;
        move(curIndex);
    })
})
