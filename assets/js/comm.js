// 준비 이벤트
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤트리거 플러그인 사용 선언
    gsap.registerPlugin(ScrollTrigger);
    // 섹션 고정
    gsap.utils.toArray('.section').forEach((panel,i) => {
        ScrollTrigger.create({
            trigger : panel,
            start : 'top top',
            pin : true,
            pinSpacing : true,
            scrub: 1,
        })
    })
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

    // 뒷 배경 이미지들 무한 부유
    const updown = document.querySelectorAll('.up');
    gsap.to(updown, {
        duration: .7,
        y: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    }); 

    const downup = document.querySelectorAll('.down');
    gsap.to(downup, {
        duration: .7,
        y: -3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // 뒷 배경 라이트 무한 회전
    const curlRight = document.querySelector('#background-light');
    gsap.to(curlRight, {
        transformOrigin: "center center",
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

    // lenis.js 스무스
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // 행성 스크롤 트리거 움직임
    let backMoving = gsap.timeline({
        scrollTrigger: {
            trigger: '.fix-back',
            start: 'top top',
            end: 'bottom bottom',
            toggleActions: "restart none reverse none",
        }
    });
    
    backMoving.to('#turn-RingPlanetLeft', {
        y: -100,
        x: 100,
        rotate: -30,
        duration: 1,
    }, "-=0.5").to('#turn-RingPlanetLeft', {
        rotate : 5,
        y : -200,
        x : 450,
        scale : .6,
        pin : true,
        duration: 1,
    })
});