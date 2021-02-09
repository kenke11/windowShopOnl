const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                }

                windows.forEach(item => {
                   item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `${scroll}px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `${scroll}px`;
            }
        });
    }

    function showModalByTime(selector, time){
        setTimeout(function (){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }


    bindModal('.popup-engineer-btn', '.popup-engineer', '.popup-engineer .popup-close');
    bindModal('.phone-link', '.popup', '.popup .popup-close');
    bindModal('.popup_calc_btn', '.popup-calc', '.popup-calc-close');
    bindModal('.popup-calc-button', '.popup-calc-profile', '.popup-calc-profile-close');
    bindModal('.popup-calc-profile-button', '.popup-calc-end', '.popup-calc-end-close');
    showModalByTime('.popup', 60000);

};

export default modal;