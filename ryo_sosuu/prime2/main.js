var dataKeisan = [];
var change = 0;
function prime(){
    var kotae =[];
    var count = 0;
    for(var i = dataKeisan.length; i>0; i--){
        var start = dataKeisan[count];
        var check = 2;
        var isPrime = true;
        while(check <= Math.sqrt(start)){
            if(start % check === 0){
                isPrime = false;
            }
            check++;
        }
        if(isPrime && start != 1){
            kotae.push(start);
        }
        count++;
    }
    if(kotae.length !=0){
        document.getElementById("primeNumber").innerHTML = kotae+"が素数で、"+kotae.length+"個の素数が見つかりました";
    }
    else{
        document.getElementById("primeNumber").innerHTML = "素数は見つかりませんでした";
    }
}
function median(){
    if(dataKeisan.length <= 1){
        window.alert("データを2つ以上入力してください");
    }
    else{
        var me = [...dataKeisan];
        me.sort(function(a,b){return a-b});
        var medianAnser;
        if(me.length % 2 == 0){
            medianAnser = me[me.length / 2 - 1] + me[me.length / 2];
            medianAnser = medianAnser / 2;
        }
        else{
            medianAnser = me[Math.round(me.length / 2 ) - 1];
        }
        document.getElementById("primeNumber").innerHTML = "中央値は" + medianAnser + "です"
    }
}
function averageValue(){
    if(dataKeisan.length <= 1){
        window.alert("データを入力してください")
    }
    else{
        var value = 0;
        for(var i = dataKeisan.length; i>0; i--){
            value += dataKeisan[i - 1];
        }
        document.getElementById("primeNumber").innerHTML = "平均値は" + value / dataKeisan.length + "です"
    }
}
function data(){
    var data1 = parseInt(document.formPrime.date_legth.value,10);
    if(!data1){
        window.alert("数値を入力してください");
    }
    else{
        dataKeisan.push(data1)
        document.getElementById("data_matome").innerHTML = dataKeisan;
        //dataMatome.innerHTML = data1 + dataMatome + ",";
    }
    //var dataMatome = document.getElementById("data_matome");
    //dataMatome.innerHTML = data1 + dataMatome + ",";
}
function mode(){
    if(dataKeisan.length == 0){
        window.alert("データを入力してください");
    }
    else{
        var mo = [...dataKeisan];
        mo.sort(function(a,b){return a-b});
        var modeT = [];
        var modeK = [0];
        for(var i = dataKeisan.length; i>0; i--){
            var k = true;
            var mod = 0;
            var cou = i - 1;
            while(k == true){
            if(mo[cou] == mo[cou -1]){
                cou--;
                mod++;
            }
            else{
                if(mod > modeK[0]){
                    modeT.splice(0,modeT.length);
                    modeT.push(mo[i -1]);
                    modeK.splice(0,modeK.length);
                    modeK.push(mod);
                }
                else if(mod == modeK[0]){
                    modeT.push(mo[i -1]);
                    modeK.push(mod);
                }
                k = false;
            }
        }
    }
    document.getElementById("primeNumber").innerHTML = "最頻値は" + modeT + "です";
    }
}
function deleate(){
    var dalate = parseInt(document.formPrime.date_dalate.value,10) -1;
    if(dataKeisan[dalate] == undefined){
        window.alert("存在する番号を入力してください")
    }
    else{
        if(dalate === 0){
            dataKeisan.shift();
        }
        else{
            dataKeisan.splice(dalate,dalate);
        }
        document.getElementById("data_matome").innerHTML = dataKeisan;
    }
}
document.getElementById("button").onclick = function changebackground(){
    if(change == 0){
        document.getElementById('container').style.backgroundImage = 'url("./image/hatenasa3.png")';
        change = 1;
    }
    else{
        document.getElementById('container').style.backgroundImage = 'url("./image/hatenasa2.png")';
        change = 0;
    }
}
