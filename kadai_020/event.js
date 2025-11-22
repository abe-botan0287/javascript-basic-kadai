document.addEventListener('DOMContentLoaded', function(){
// HTMLから要素とテキスト要素を取得します
const button  = document.getElementById('btn');
const textElement = document.getElementById('text');

// ボタンがクリックされたときのイベントリスナーを追加
button.addEventListener('click', function() {
    // テキスト要素の内容を変更
    textElement.textContent = 'ボタンをクリックしました!';
  });
})
