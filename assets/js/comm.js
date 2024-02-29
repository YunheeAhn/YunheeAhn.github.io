// 준비 이벤트
document.addEventListener('DOMContentLoaded', function() {
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

    // 풀페이지
    new fullpage("#fullpage", {
        navigation: true,
        navigationTooltips: ['Intro','Profile','OnePage','SamsungHospital','MegaZoo','PjName','Contact'],
        anchor: ['intro','profile','onepage','samsungHospital','megaZoo','pjName','contact'],
        scrollingSpeed: 1000,
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

    // 뒷 배경 이미지들 무한 부유
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

    // 먼지 깜빡임
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
    })
    const twinkleDust = document.querySelectorAll('.twinkle');
    tl.to(twinkleDust, {
        opacity: 0,
        duration: 0.1
    });
    tl.to(twinkleDust, {
        opacity: 1,
        duration: 0.1,
    })
    requestAnimationFrame(raf);
    

    // 스크롤트리거 플러그인 사용 선언
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.background-blur', {
        opacity: 1, // 초기 투명도 설정
        scrollTrigger: {
            trigger: '#fullpage',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true // 스크롤시 요소가 스크롤 속도에 따라 부드럽게 따라가도록 함
        }
    });
    

    

    let ScrollTrigger = gsap.to(".turn-sPlanet",{x:"-100px", duration: 1.5});

    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            },
        });
});

// $(document).ready(function () {
//     // fullpage
//     $("#fullpage").fullpage({
//       responsiveWidth: 480,
//     });
//     $("#fullpage").fullpage({
//       scrollingSpeed: 700,
//       // scrollBar: true,
//       onLeave: function (origin, destination, direction) {
//         // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
//         $("#fullpage").on("scroll touchmove mousewheel", function (event) {
//           event.preventDefault();
//           event.stopPropagation();
//           return false;
//         });
//         swiper.mousewheel.disable();
//       },
//       afterLoad: function (anchorLink, index) {
//         // 전환이 끝난후 이벤트풀기
//         $("#fullpage").off("scroll mousewheel");
//         if (!$(".fp-completely .swiper-wrapper").length > 0)
//           $("#fullpage").off("touchmove"); // 모바일분기
//         if (swiper) swiper.mousewheel.enable();
//         if (!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
//       },
//     });
// })