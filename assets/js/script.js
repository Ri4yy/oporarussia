document.addEventListener('DOMContentLoaded', () => {
    let headerMobile = document.querySelector('.header__mobile'),
        header = document.querySelector('.header'),
        html = document.querySelector('html'),
        btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        headerMobile.classList.toggle('open')
        header.classList.toggle('open')
        html.classList.toggle('no-scroll')

        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 1024) {
            headerMobile.classList.remove('open')
            header.classList.remove('open')
            html.classList.remove('no-scroll')
            btnMenu.classList.remove('btn-menu--open')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()


    const aboutContainer = document.querySelector('.about__inner');
    const aboutBtnMore = document.querySelector('#about-more');
    let aboutBtnToggle = false;

    if(aboutBtnMore) {
        aboutBtnMore.addEventListener('click', () => {
            if(aboutBtnToggle) {
                aboutContainer.classList.remove('open')
                aboutBtnMore.textContent = 'подробнее';
                aboutBtnToggle = false;
            } else {
                aboutContainer.classList.add('open')
                aboutBtnMore.textContent = 'скрыть';
                aboutBtnToggle = true;
            }
        })
    }

    function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
        $(wrapperTab).on('click', 'li:not('+activeTab+')', function () {
            $(this)
                .addClass(activeTab).siblings().removeClass(activeTab)
                .closest(wrapperMain).find(wrapperContent).removeClass(activeContent).eq($(this).index()).addClass(activeContent);
        });
    }
    tabs('.tabs', '.tabs__list', '.tabs__content', 'active-tab', 'active');
})