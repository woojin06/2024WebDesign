//슬라이드 메뉴
$(".main-menu li").mouseover(function(){
    $(".sub-menu").stop().slideDown();
}).mouseout(function(){
    $(".sub-menu").stop().slideUp();
})
//공지사항 탭 버튼 클릭했을 때
$(".tab-title2 ul li:first-child").click
(function(){
    $(".notice-con").show(); //공지사항은 보여주고
    $(",gallery-con").hide(); //갤러리는 숨긴다.
})
//갤러리 탭 버튼 클릭했을 때
$(".tab-title2 ul li:first-child(2)").click
(function(){
    $(".notice-con").hide(); //공지사항은 숨기고
    $(",gallery-con").show(); //갤러리는 보여준다.
})
