// 스와이퍼 js 샘플
new Swiper(".swiper-container", {
    direction: "vertical", // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    });



    $(function() {
        var page = $('.fullpage').fullpage();
    })

    $(function() {
        var page = $('.fullpage').fullpage({
     
            // 1. 네비게이션 보이기
            navigation : true,
     
            // 2. 네비게이션 위치 지정
            navigationPosition : 'left',
     
            // 3. 각 섹션의 배경색상 지정 (6자의 핵사코드 작성가능)
            sectionsColor : ['pink', 'yellow', '#efefef'],
        });
    })


    $(function() {
        var page = $('.fullpage').fullpage({
     
            // menu에 대한 옵션 설정
            menu : '.gnb',
            anchors : ['section1', 'section2', 'section3'],
     
        });
    })

    $(function() {
        var page = $('.fullpage').fullpage({
     
            // 스크롤 허용을 원하는 요소의 클래스를 적어줌
            normalScrollElements: '.scroll'
     
        });
    })