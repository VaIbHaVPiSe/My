document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {

        // Pizza images
        const els1 = document.querySelectorAll('.hint-to-scroll-left');
        [...els1].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'hintToScrollLeft 2s ease-in-out 2 forwards';
            } else {
                el.style.animation = '';
            }
        });

        // library img
        // const els2 = document.querySelectorAll('.from-right-center');
        // [...els2].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         el.style.animation = 'fromRightCenter 1s ease-out 0.4s 1 forwards';
        //     } else {
        //         el.style.animation = '';
        //     }
        // });

        // password img 2
        // const els3 = document.querySelectorAll('.from-left-top');
        // [...els3].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         el.style.animation = 'fromLeftTop 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
        //     } else {
        //         el.style.animation = '';
        //     }
        // });

        // password img 1
        // const els4 = document.querySelectorAll('.from-right-top');
        // [...els4].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         el.style.animation = 'fromRightTop 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
        //     } else {
        //         el.style.animation = '';
        //     }
        // });

        // contact section list
        // const els5 = document.querySelectorAll('.come-from-left');
        // [...els5].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         el.style.animation = 'comeFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
        //     } else {
        //         el.style.animation = '';
        //     }
        // });

        // visit buttons and contact section socials
        // const els6 = document.querySelectorAll('.come-from-far-left');
        // [...els6].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         if(el.classList.contains('contacticon')) {
        //             let delay = rect.left / window.innerWidth;
        //             console.log(delay);
        //             el.style.animation = `comeFromFarLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s 1 forwards`;
        //         } else {
        //             el.style.animation = 'comeFromFarLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
        //         }
        //      } else {
        //         el.style.animation = '';
        //         delay = 0
        //     }
        // });

        // headings
        // const els7 = document.querySelectorAll('.fade-up');
        // [...els7].forEach(el => {
        //     const rect = el.getBoundingClientRect();
        //     if (rect.top < window.innerHeight && rect.bottom > 0) {
        //         el.style.animation = 'fadeUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
        //     } else {
        //         el.style.animation = '';
        //     }
        // });

        
    });
});