    // 1.打印0-2018年，所有的闰年
    function leapYear(){
        console.log('0-2018年，所有的闰年为：');
        for(var i=0;i<=2018;i++){
            if(i%4==0 && i%100!=0 || i%400==0){
                console.log(i);
            }
        }
    }
    leapYear();

    //2.水仙花数是指一个 3 位数，它的每个位上的数字的 3次幂之和等于它本身（例如：1^3 + 5^3+ 3^3 = 153）打印出100--999以内的所有 "水仙花数 "
    function shuixianhua(){
        console.log('水仙花数为');
        for(var i=100;i<=999;i++){
            var item = i+'';
            if(item[0]**3+item[1]**3+item[2]**3==i){
                console.log(+i);
            }
        }        
    }
    shuixianhua();

    //3.输入两个正整数m和n,求其最大公约数和最小公倍数
    var m = prompt("请输入一个正数");
    var n = prompt("再输入一个正数");
    var lcm=m*n,gcd;
    for(var i=0;i<=m&&i<=n;i++){
        if(m%i==0&&n%i==0){
            gcd = i;
        }
    }
    for(var i=0;i>=m&&i>n;i++){
        if(i%m==0&&i%n==0){
            lcm = i;
        }
    }
    console.log('最小公倍数为：'+lcm,'最大公因数为：'+gcd);


    //4.输入三个整数x,y,z，请把这三个数由小到大输出
    function sort(){
        var x=3,y=67,z=12;
        if(x<y && x<z){
            if(y<z){
                console.log(x,y,z);
            }
            else console.log(x,z,y);
        }
        else if(y<x && y<z){
            if(x<z){
                console.log(y,x,z);
            }
            else console.log(y,z,x);
        }
        else if(z<x && z<y){
            if(x<y){
                console.log(z,x,y);
            }
            else console.log(z,y,x);
        }
    }
    sort();
    //5.已知一个代表“人”的people对象，其含有属性：姓名，年龄，性别，身份等
    //6.请通过for-in循环遍历其各属性值

    //7.输入月、日，计算是今年的第几天，2月统一为28天(switch)
    function count(){
        var month = Number(prompt('请输入月份'));
        var day = Number(prompt('请输入日期'));
        var sum = 0;
        switch (month) {
            case 12:
                sum += 30;
            case 11:
                sum += 31;
            case 10:
                sum += 30;
            case 9:
                sum += 31;
            case 8:
                sum += 31;
            case 7:
                sum += 30;
            case 6:
                sum += 31;
            case 5:
                sum += 30;
            case 4:
                sum += 31;
            case 3:
                sum += 28;
            case 2:
                sum += 31;
            case 1:
                sum += day;
                break;
        }
        console.log(sum);
    };