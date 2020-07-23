function janken(myHand){
    
    //じゃんけんの手を格納する配列を用意する
    var handArray = ["グー","チョキ","パー"];
    console.log(handArray[myHand]);
    
    //cpの手をランダムに決める
    //Math.random 0以上1未満の疑似乱数を返す
    var random = Math.random()*100;
    console.log(random);
    
    var randomNum = Math.floor(random);
    console.log(randomNum);
    
    var computerHand = randomNum % 3;
    console.log(computerHand);
    
    if(myHand == 0){
        if(computerHand == 0){
            alert("あいこです.");
        }else if(computerHand == 1){
            alert("あなたの勝ちです.");
        }else if(computerHand == 2){
            alert("コンピュータの勝ちです.");
        }
    }else if(myHand == 1){
        
    }else if(myHand == 2){
         
    }
}