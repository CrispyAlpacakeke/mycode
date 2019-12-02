(function tabSwitch(){
    var tabLis = document.querySelectorAll('.brick-box ul.tab-list li');
    //尝试打印，有些brickBoxe里面没有切换标签，需要把这些排出
    // console.log(tabLis)
    if (tabLis.length > 0) {
        //遍历每一个切换选项，这里用for循环是为了拿到下标，然后通过下标操作对应的Ul
        //同样你也可以使用forEach来改写所有for循环
        for (var i = 0; i < tabLis.length; i++) {
            var curTab = tabLis[i]
            // console.log(curTab)
            //获取当前tab在她的兄弟里面的索引值，也就是下标值
            curTab.addEventListener('mouseenter', function () {
                //首先把tabli兄弟的active取消
                for (var el of this.parentElement.children) {
                    //如果tabli的某个兄弟有tab-active就给其取消
                    if (el.classList.contains('tab-active')) {
                        el.classList.remove('tab-active')
                    }
                    //当然你也不用判断，直接向下面这样写，如果某个兄弟没有tab-active，直接remove不会报错直接忽略，有责取消
                    //el.classList.remove('tab-active')
                    //再给自己加上tab-active
                    this.classList.add('tab-active')
                };
                //当前选项卡对应的祖先.brick-box
                var curBrickBox = this.parentElement.parentElement.parentElement.parentElement;
                //当前选项卡对应的.brick-list
                var brickLists = curBrickBox.querySelectorAll('.box-bd .right ul.brick-list');
                // 获取当前选项卡在兄弟中的索引值
                var curIndex = Array.from(this.parentElement.children).indexOf(this)
                console.log(curIndex);
                //遍历商品ul的所有项目，如果该项目的索引值等于选项卡的项目则让他显示，否则就隐藏
                for (var j = 0; j < brickLists.length; j++) {
                    if (j == curIndex) {
                        brickLists[j].classList.remove('hide')
                    } else {
                        brickLists[j].classList.add('hide')
                    }
                }

            })
        }
    }   
})();

(function myHover(){
    var svItm = document.querySelectorAll('.service-list li.service-item');
    for (var i = 0; i < svItm.length; i++) {
        var curTab = svItm[i];
        // console.log(curTab);
        curTab.addEventListener('mouseover', function () {
            this.children[0].style.color = '#ff6700';
            var curImg = this.children[0].children[0];
            // console.log(curImg.src.slice(0,-4),curImg.src.slice(-4));
            curImg.src = curImg.src.slice(0, -4) + '-active' + curImg.src.slice(-4);
        }
        )
        curTab.addEventListener('mouseout', function () {
            var curImg = this.children[0].children[0];
            // console.log(curImg.src.slice(0,-4),curImg.src.slice(-4));
            curImg.src = curImg.src.replace('-active', '');
            this.children[0].style.color = '#616161';
        }
        )
    }   
})();

(function load(){
    let link = document.getElementsByClassName('link');
    let menu = document.getElementsByClassName('header-nav-menu');
    for (let i = 0; i < link.length; i++) {
        link[i].onmouseover = function () {
            menu[0].style.display = "block";
        }
        link[i].onmouseout = function () {
            menu[0].style.display = "none";
        }
    }    
})();

(function toolBar(){
    var toolItm=document.querySelectorAll('.tool-bar .item');
    for(var i=0;i<toolItm.length;i++){
        var curTab=toolItm[i];
        console.log(curTab);
        curTab.addEventListener('mouseover',function(){
                this.children[0].children[0].style.opacity = '0';
                this.children[0].children[1].style.opacity = '1';
            }
        )
        curTab.addEventListener('mouseout',function(){
                this.children[0].children[0].style.opacity = '1';
                this.children[0].children[1].style.opacity = '0';
            }
        )
    }
})();

(function e(){
    var curWidth=document.documentElement.clientWidth;
    console.log(curWidth);
    var toTop = document.querySelectorAll('.tool-bar .item.backtop');
    if(curWidth<1350){
        toTop[0].parentElement.classList.add('tool-bar-small');
    }
    if(curWidth<1276){
        toTop[0].parentElement.classList.add('mini');
    }
})();


