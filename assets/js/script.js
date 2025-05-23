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

    const eventsContainer = document.querySelectorAll('.events__item-text');
    const eventsBtnMore = document.querySelectorAll('.events__item-btn');
    
    if(eventsBtnMore.length) {
        eventsBtnMore.forEach((btn, i) => {
            let eventsBtnToggle = false;
    
            btn.addEventListener('click', (e) => {
                if(eventsBtnToggle) {
                    eventsContainer[i].classList.remove('open')
                    btn.textContent = 'подробнее';
                    eventsBtnToggle = false;
                } else {
                    eventsContainer[i].classList.add('open')
                    btn.textContent = 'скрыть';
                    eventsBtnToggle = true;
                }
            })
        });
    }

    function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
        $(wrapperTab).on('click', 'li:not('+activeTab+')', function () {
            $(this)
                .addClass(activeTab).siblings().removeClass(activeTab)
                .closest(wrapperMain).find(wrapperContent).removeClass(activeContent).eq($(this).index()).addClass(activeContent);
        });
    }
    tabs('.tabs', '.tabs__list', '.tabs__content', 'active-tab', 'active');

    let leftMenuToggle = document.querySelector('.content__toggle'),
        leftMenuWrapper = document.querySelector('.content__left-menu__wrapper');

    if(leftMenuToggle) {
        leftMenuToggle.addEventListener('click', (e) => {
            e.target.classList.toggle('active')
            e.target.querySelector('svg').classList.toggle('active')
            leftMenuWrapper.classList.toggle('open')
        });
    }

    const mapLinks = document.querySelectorAll('.map__svg a');

    let okrug = {
        center: 'Центральный федеральный округ',                    // 1
        volga: 'Приволжский федеральный округ',                     // 2
        northwestern: 'Северо-Западный федеральный округ',          // 3
        ural: 'Уральский федеральный округ',                        // 4
        fareastern: 'Дальневосточный федеральный округ',            // 5
    };

    mapLinks.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            let self = e.currentTarget;
            let color = self.dataset.color;
            let name = self.dataset.okrug;
            
            let nameOkrug = okrug[name];
            document.querySelector('#map-title').textContent = nameOkrug;
        
            let mapPoint = self.querySelector('.map__point');
            if (mapPoint) mapPoint.style.display = '';
        
            let currentPaths = self.querySelectorAll('path');
            currentPaths.forEach(path => {
                if (!path.closest('g')) {
                    path.style.cssText = `fill: ${color}`;
                }
            });

            mapLinks.forEach(item => {
                if (item.getAttribute("data-okrug") === name) {
                    item.classList.add("active");
                }
            });
        });
        el.addEventListener('mouseout', (e) => {
            let self = e.currentTarget;
            let name = self.dataset.okrug;

            let mapPoint = self.querySelector('.map__point');
            if (mapPoint) mapPoint.style.display = 'none';

            let currentPath = self.querySelectorAll('path');
            if(currentPath) currentPath.forEach(el => el.style.cssText=`fill: `);

            mapLinks.forEach(item => {
                if (item.getAttribute("data-okrug") === name) {
                    item.classList.remove("active");
                }
            });
        })
    })  
})
