var banner = new Swiper("main .banner_container .swiper", {
    navigation:{
        nextEl: "main .banner_container .swiper .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-next",
        prevEl: "main .banner_container .swiper .swiper_btn_wrap .swiper_arrow_wrap .swiper-button-prev",
    },
    pagination: {
        el: "main .banner_container .swiper .swiper_btn_wrap .swiper-pagination",
    },
});
var lataleVideo = new Swiper("main .latale_video_container .swiper", {
    navigation:{
        nextEl:"main .latale_video_container .swiper-button-next",
        prevEl:"main .latale_video_container .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
})
var userWebtoon = new Swiper("main .user_content_container .swiper", {
    navigation:{
        nextEl:"main .user_content_container .swiper-button-next",
        prevEl:"main .user_content_container .swiper-button-prev",
    },
})
const header = document.querySelector('header');
const gameStartBtn = document.querySelector('header .game_start_btn button');
const styleSmall = document.querySelectorAll('main .game_info_container .new_style_wrap .new_style_small button');
const styleBig = document.querySelector('main .game_info_container .new_style_wrap .new_style_big p img');
const styleGo = document.querySelector('main .game_info_container .new_style_wrap .new_style_big a')
const gameStart = document.querySelector('main .game_info_container .game_start_wrap .game_start_btn button')
const lataleVideoThum = document.querySelectorAll('main .latale_video_container .latale_video_wrap .swiper-slide button');
const lataleVideoPopup = document.querySelector('main .latale_video_popup_wrap');
const lataleVideCloseBtn = document.querySelector('main .latale_video_popup_wrap button');
console.log(gameStartBtn, styleSmall, styleBig, styleGo, gameStart, lataleVideoThum, lataleVideoPopup ,lataleVideCloseBtn)
/* 라테일 영상 팝업 */
lataleVideCloseBtn.addEventListener('click',()=>{
    lataleVideoPopup.style.display = 'none';
    document.body.style.overflow = '';
})
lataleVideoThum.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        lataleVideoPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    })
})
/* 스크롤내릴시 게임시작 버튼 등장 */
window.addEventListener('scroll',()=>{
    if(window.scrollY > 133){
        gameStartBtn.classList.add('active')
        header.classList.add('active')
    }else{
        gameStartBtn.classList.remove('active')
        header.classList.remove('active')
    }
})
/* 뉴스타일 */
/* 1. 큰 사진이 나오는 곳의 src를 함수에 담고 매개변수를 연동한다. */
/* 2. 작은 사진 하나씩 클릭했을 때 함수를 가져와서 매개변수에 숫자를 넣어준다. */
function styleBigSrc(num){
    return styleBig.src = `./images/big_style0${num}.png`
}
styleSmall[0].addEventListener('mouseover',()=>{
    styleBigSrc(1)
    styleGo.href = 'https://www.latale.com/news/newstyle#link=4562DC7F0297E34757104163B1D2FB35C0D6B21DB5742108361578F0735EFEC5240347102199EF349E2A1905805DB0C3'
})
styleSmall[1].addEventListener('mouseover',()=>{
    styleBigSrc(2)
    styleGo.href = 'https://www.latale.com/news/newstyle#link=095E7937B48B57554B030CA71CD18858249B401277E93906369557A2CA9D9E5B15605B6EBBCDA70E391F90951FC8AB5C'
})
styleSmall[2].addEventListener('mouseover',()=>{
    styleBigSrc(3)
    styleGo.href = 'https://www.latale.com/news/newstyle#link=E9B4201E1BBEAE181FA23D7E9B786E8976732AFA4FB440010C5DAAB04718EE5795CD1CAFD1B526C4BE2943BA6360B687'
})
styleSmall[3].addEventListener('mouseover',()=>{
    styleBigSrc(4)
    styleGo.href = 'https://www.latale.com/news/newstyle#link=A7998AE51F0DEFEFAA0032A6B8C36769467ABA27D3A8BC04E27C1A0A5367E2214A76335F53303136EC9D2D52D5A17735'
})
gameStart.addEventListener('mouseover',()=>{
    console.log(gameStart.children[0].src)
    gameStart.children[0].src = './images/game_start_on_icon.png'
})
gameStart.addEventListener('mouseleave',()=>{
    gameStart.children[0].src = './images/game_start_icon.png'
})
gameStart.addEventListener('click',()=>{alert('게임이 설치되지 않았습니다.')})