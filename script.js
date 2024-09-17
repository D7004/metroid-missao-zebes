const advance = document.querySelectorAll('.btn-next');

advance.forEach(button => {
    button.addEventListener('click', function(){
        const moment = document.querySelector('.active');
        const nextstep = 'step-' + this.getAttribute('data-nxt');

        moment.classList.remove('active')
        document.getElementById(nextstep).classList.add('active');
    })
})