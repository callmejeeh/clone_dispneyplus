document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabAlvo = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabAlvo}]`);
            escondeTodos();
            tab.classList.add('shows__list--is-active');
            removeBotao();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeBotao() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodos() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0; i< tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}