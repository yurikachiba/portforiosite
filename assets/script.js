'use strict';
// //グローバルナビゲーション
// let prevScrollPos = window.pageYOffset;
// window.addEventListener('scroll', function () {
//     let currentScrollPos = window.pageYOffset;
//     let header = document.querySelector('#header');

//     if (prevScrollPos > currentScrollPos) {
//         // スクロールが上方向（上に戻っている）の場合、ヘッダーを表示
//         header.style.transform = 'translateY(0)';
//     } else {
//         // スクロールが下方向（下に進んでいる）の場合、ヘッダーを非表示
//         header.style.transform = 'translateY(-100%)';
//     }

//     prevScrollPos = currentScrollPos;
// });
// //グローバルナビゲーション


// 制作実績カルーセル
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // 画像の表示と非表示を制御
    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else if (i === currentIndex) {
                img.classList.remove('active');
                img.classList.add('previous');
            } else {
                img.classList.remove('active', 'previous');
            }
        });
    }

    // 画像を切り替える間隔（ミリ秒）
    const interval = 3000;

    // 画像を自動的に切り替えるタイマー
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }, interval);

    // 最初の画像を表示
    showImage(currentIndex);
});

// ここまで制作実績カルーセル

// トップへ戻るボタン

window.addEventListener('scroll', function () {
    var pagetop = document.querySelector('.pagetop');
    if (window.pageYOffset > 200) {
        pagetop.style.display = 'block';
    } else {
        pagetop.style.display = 'none';
    }
});

// ここまでトップへ戻るボタン


// ローディングアニメーション
// スクロールを無効にする関数
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// スクロールを有効にする関数
function enableScroll() {
    document.body.style.overflow = '';
}

// 一定時間後または条件を満たした後にローディングオーバーレイを非表示にするJavaScript
document.addEventListener("DOMContentLoaded", function () {
    disableScroll(); // ページ読み込み時にスクロールを無効にする

    // 3秒後にローディングアニメーションを非表示にする
    setTimeout(function () {
        document.getElementById('loading-overlay').style.display = 'none';
        enableScroll(); // ローディングアニメーションを非表示にした後にスクロールを有効にする
    }, 3000);
});
