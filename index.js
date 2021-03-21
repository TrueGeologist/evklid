(() => {
    let headerBurger = document.querySelector('.header__burger');
    let headerCross = document.querySelector('.menu__cross-btn');
    let menu = document.querySelector('#menu');

    let accordionBtns = document.querySelectorAll('.section-FAQ__item__button');

    document.addEventListener('DOMContentLoaded', () => {
        //Табы
        document.querySelectorAll('.section-work__btn').forEach( (sectionWorkBtn) => {
            sectionWorkBtn.addEventListener('click', (event) => {
                const path = event.currentTarget.dataset.path;

                document.querySelectorAll('.section-work__btn').forEach( (stepContent) => {
                    stepContent.classList.remove('section-work__btn-active');
                });

                document.querySelector(`[data-path="${path}"]`).classList.add('section-work__btn-active');

                document.querySelectorAll('.step-content').forEach( (stepContent) => {
                    stepContent.classList.remove('step-content-active');
                });

                document.querySelector(`[data-target="${path}"]`).classList.add('step-content-active');
            });
        });

        //Бургер-меню
        headerBurger.addEventListener('click', () => {
            menu.classList.add('menu__is-active');
            menu.ariaHidden = "false";
        });

        headerCross.addEventListener('click', () => {
            menu.classList.remove('menu__is-active');
            menu.ariaHidden = "true";
        });

        headerBurger.addEventListener('keydown', ev => {
            if (ev.code == "Space" || ev.code == "Enter") {
                menu.classList.add('menu__is-active');
                menu.ariaHidden = "false";
            }
        });

        headerCross.addEventListener('keydown', ev => {
            if (ev.code == "Space" || ev.code == "Enter") {
                menu.classList.remove('menu__is-active');
                menu.ariaHidden = "true";
            }
        });

        //Поворот кнопки аккордеона
        document.querySelectorAll('.section-FAQ__item').forEach( (sectionFAQItem) => {
            sectionFAQItem.addEventListener('click', (event) => {
                const activeItem = event.currentTarget;
                
                document.querySelectorAll('.section-FAQ__item__button').forEach( (btn) => {
                    btn.classList.remove('section-FAQ__item__button-active');
                })

                activeItem.querySelector('.section-FAQ__item__button').classList.add('section-FAQ__item__button-active');

                // console.log(activeItem.querySelector('.section-FAQ__item__button-active').classList);
            });
        });
    });
}) ();