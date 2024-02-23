// 준비 이벤트
document.addEventListener('DOMContentLoaded', function() {
    new fullpage("#fullpage", {
        navigation: true,
        navigationTooltips: ['Profile','Project','Contact'],
        anchor: ['profile','project','contact'],
        scrollingSpeed: 800,
        scrollOverflow: true,
        bigSectionsDestination: top,
        responsiveWidth: 1025,
        onLeave: function () {
        jQuery(".section [data-aos]").removeClass("aos-animate");
        },
        onSlideLeave: function () {
        jQuery(".slide [data-aos]").removeClass("aos-animate");
        },
        afterSlideLoad: function () {
        jQuery(".slide.active [data-aos]").addClass("aos-animate");
        },
        afterLoad: function () {
        jQuery(".section.active [data-aos]").addClass("aos-animate");
        },
    });

    // swiper.js
    var length = $(".part-2 .swiper .swiper-wrapper .swiper-slide").length;
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        threshold: 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        mousewheel: true,
        on: {
            slideChange: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if (this.activeIndex != 0 && idx != length)
                    $.fn.fullpage.setAllowScrolling(false);
                if (length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false); //슬라이드가 2개밖에 없을때
                // console.log('즉시 : ' + idx);
                },
            slideChangeTransitionEnd: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if (idx == 0 || idx >= length - 1)
                    $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);
                },
            touchMove: function (e) {
                var startY = e.touches.startY;
                setTimeout(function () {
                    if (startY > e.touches.currentY) swiper.slideNext();
                    else swiper.slidePrev();
                    }, 100);
                },
            }
        });
        swiper();
        
        
    // 뒷 배경 이미지들 무한 둥둥
    const updown = document.querySelectorAll('.up');

    gsap.to(updown, {
        duration: .9,
        y: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    }); 

    const downup = document.querySelectorAll('.down');
    gsap.to(downup, {
        duration: .9,
        y: -3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // 뒷 배경 라이트 무한 회전
    const curlRight = document.querySelector('.background-light');
    gsap.to(curlRight, {
        duration : 5,
        rotate: 360,
        repeat: -1,
        ease: "power1.inOut"
    });

    // 타이핑 효과
    var strings = ["WELCOME!", "YUNHEEVERSE"];
    var el = document.getElementById('str');

    function animateStrings(index) {
        var string = strings[index];
        var str = string.split("");
        var interval = setInterval(function () {
            if (str.length > 0) {
                el.innerHTML += str.shift();
            } else {
                clearInterval(interval);
                setTimeout(function() {
                    el.innerHTML = ''; // 이전 문자열 삭제
                    animateStrings((index + 1) % strings.length); // 다음 문자열로 이동
                }, 1000); // 다음 문자열까지의 지연시간 (1초)
            }
        }, 90);
    }

    animateStrings(0);
});