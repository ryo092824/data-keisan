function prime() {
    var start = parseInt(document.formPrime.start.value,10);
    var end = parseInt(document.formPrime.end.value,10);
    if (end - start > 1000000){
        window.alert("調べる範囲は1000000以下にしてください");
    }else{
        var kotae =[];
    while(start <= end){
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
        start++;
    }
    document.getElementById("answer").innerHTML = kotae;
    document.getElementById("kazu").innerHTML = kotae.length+'個の素数が見つかりました';
    }
}
