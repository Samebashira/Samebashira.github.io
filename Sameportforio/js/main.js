// bodyタグを取得
const documentBody = document.querySelector('body');
// body直下に右から左のカーテン
var newElement1 = document.createElement("div");
newElement1.setAttribute("class","leftCurtainbg");
documentBody.prepend(newElement1);
// body直下に左から右のカーテン
var newElement2 = document.createElement("div");
newElement2.setAttribute("class","rightCurtainbg");
documentBody.prepend(newElement2);


// bodyタグにclassを付与
documentBody.classList.add('pageOn');

// 1.5秒経ったらオーバーレイ非表示
setTimeout(function(){ 
    newElement1.style.display = "none";
    newElement2.style.display = "none";
  }, 1500);

// 泡カウント
let start_count = 0;
// 泡の最大個数
let max_count = 30;
// タイマー停止用宣言
let bubbleIntervalId;

// 泡のタグ作成処理
function Bubbles(){
  var posWidVal = Math.ceil( Math.random()*100 );
  var posHeiVal = Math.ceil( Math.random()*100 );
  var scaleVal = Math.ceil( Math.random()*50 );

  // 泡のタグを作成
  var div_move = $('<div class="move" style="left:' + posWidVal + '%; bottom: -'+ posHeiVal +'%">');
  var div_bubble =$('<div class="item shake" style="width:'+ scaleVal +'px; height:' + scaleVal +'px;"></div>');

  // field_bubblesタグに貼り付け
  div_move.append(div_bubble);
  $('.field_bubbles').append(div_move);
  start_count++;
  // 泡最大個数でタイマー停止
  if(start_count >= max_count){
    clearInterval(bubbleIntervalId);
  }
};

// 発動
bubbleIntervalId = setInterval(Bubbles, 200);

// タグフェードイン用
$('.contents_flex').hide().fadeIn(1500);
