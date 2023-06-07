document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('.about__tab');
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });

            tab.classList.add('active');

            const tabId = tab.getAttribute('id');

            const tabContents = document.querySelectorAll('.about__tab-content');
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active');
            });

            const activeTabContent = document.querySelector(`#${tabId}-content`);
            activeTabContent.classList.add('active');
        });
    });

    const accordion = () => {
        const btns = document.querySelectorAll(".accordion__head");

        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                let accordion__block = btn.nextElementSibling;
                if (accordion__block.style.maxHeight) {
                    document.querySelectorAll('.accordion__block').forEach((btn) => btn.style.maxHeight = null)
                } else {
                    document.querySelectorAll('.accordion__block').forEach((btn) => btn.style.maxHeight = null)
                    accordion__block.style.maxHeight = accordion__block.scrollHeight + 'px'
                }

            })

        })
    }

    accordion();

    const slider = document.querySelector('.slider');
    const sliderText = document.querySelector('.slider__text');
    const reviews = document.querySelectorAll('.slider__review');
    const dots = document.querySelectorAll('.slider__dot');
    const leftNav = document.querySelector('.slider__nav-left');
    const rightNav = document.querySelector('.slider__nav-right');

    let index = 0;

    function changeIndex(num) {
        index += num;
        if (index < 0) {
            index = reviews.length - 1;
        } else if (index >= reviews.length) {
            index = 0;
        }
        sliderText.style.transform = `translateX(-${index * 25}%)`;
        updateActiveDot();
    }

    function updateActiveDot() {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            sliderText.style.transform = `translateX(-${index * 25}%)`;
            updateActiveDot();
        });
    });

    leftNav.addEventListener('click', () => {
        changeIndex(-1);
    });

    rightNav.addEventListener('click', () => {
        changeIndex(1);
    });

    updateActiveDot();




    const modal = document.querySelector('#modal');
    const modalBtn = document.querySelector('#modal__btn');
    const picture = document.querySelector('.first-block__picture');

    picture.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });



    
});






