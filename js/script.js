//スクロールボタン
//  scrollTop('js-scroll-top', 150);

//function scrollTop(el, duration) {
  //const target = document.getElementById(el);
  //target.addEventListener('click',function() {
    //let currentY = window.pageYOffset; //現在のスクロール位置
    //let step = duration/currentY > 1 ? 10 : 100; //三項演算
    //let timeStep = duration/currentY * step;//スクロール速度調整
    //let intervalId = setInterval(scrollUp, timeStep);
      //timeStepの間隔でscrollUpを繰り返す
      //clearItervalのために返り値intervalIDを定義する
      //function scrollUp() {
      //  currentY = window.pageYOffset;
    //    if (currentY === 0) {
      //    clearInterval(intervalId); // ページ最上部に来たら終了
        //} else {
          //scrollBy(0, -step); // step分上へスクロール
  //      }
    //  }
  //});
//}

'use strict' ;

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}
