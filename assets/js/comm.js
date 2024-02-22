// 준비 이벤트
document.addEventListener('DOMContentLoaded', function() {
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

    // const typingTxt = document.querySelector('.text-wrap');
    // const text = "Hello! YUNHEEVERSE"; // 여기에 출력할 텍스트를 지정하세요
    // let index = 0;

    // gsap.timeline({
    //     duration: 4,
    //     repeat: -1,
    //     repeatDelay: 1,
    //     yoyo: true
    // })
    // .to({}, {
    //     duration: 4,
    //     onUpdate: function() {
    //         if (index < text.length) {
    //             typingTxt.textContent += text.charAt(index);
    //             index++;
    //         }
    //     }
    // });
});