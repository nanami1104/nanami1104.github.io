function hello(language){
    
   var message = "";
    
    if(language == 1){
        message = "腹部の側面から前面にかけて位置する";
    }else if(language == 2){
        message = "腹筋の中で一番深いところにある筋肉。脊椎を保護し、安定させている";
    }else if(language == 3){
        message = "俗に「腹筋」や「シックスパック」と呼ばれる、最も知られた腹筋";
    }else if(language == 4){
        message = "外腹斜筋の下側に位置し、逆方向にのびている";
    }

    alert(message);
}