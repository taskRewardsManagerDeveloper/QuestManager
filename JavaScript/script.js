// log-in-screen
/** ログインフォーム(receive)を出現させる関数*/
function appearReceiveForm(){
    //btn要素の取得
    let btnR = document.getElementById("btnReceive");
    let btnG = document.getElementById("btnGive");

    //クリックした時btnのカーソル反応を消し次の画面へ切り替え
    btnR.classList.add("pointer-none");
    btnG.classList.add("pointer-none");

    btnR.classList.add("d-none-slow-scale");
    btnG.classList.add("d-none-slow");

    //受注ログイン画面を出す
    let ReceiveLoginScreen = document.getElementById("Receive-login-screen");
    ReceiveLoginScreen.classList.remove("d-none");
    ReceiveLoginScreen.classList.add("d-appear-slow");
}

/**ログインフォーム(order)を出現させる関数 */
function appearGiveForm(){
    //btn要素の取得
    let btnR = document.getElementById("btnReceive");
    let btnG = document.getElementById("btnGive");

    //クリックした時btnのカーソル反応を消し次の画面へ繊維
    btnR.classList.add("pointer-none");
    btnG.classList.add("pointer-none");

    btnR.classList.add("d-none-slow");
    btnG.classList.add("d-none-slow-scale");

    //受注ログイン画面を出す
    let ReceiveLoginScreen = document.getElementById("Give-login-screen");
    ReceiveLoginScreen.classList.remove("d-none");
    ReceiveLoginScreen.classList.add("d-appear-slow");
}



// sign-up-screen
/**サインアップフォーム(receive)を出現させる関数 */
function appearReceiveRegister(){
    // registerFirstScreenの非表示
    let registerFirstScreen = document.getElementById("registerFirstScreen");
    registerFirstScreen.classList.add("d-none");


    //Receive-screenの表示
    let registerReceiveScreen = document.getElementById("registerReceiveScreen");
    registerReceiveScreen.classList.remove("d-none");
    
}

/**サインアップフォーム(order)を出現させる関数 */
function appearOrderRegister(){
    // registerFirstScreenの非表示
    let registerFirstScreen = document.getElementById("registerFirstScreen");
    registerFirstScreen.classList.add("d-none");


    //Order-screenの表示
    let registerOrderScreen = document.getElementById("registerOrderScreen");
    registerOrderScreen.classList.remove("d-none");
}



//