// set initial count
let count = 0;

// select valyue and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'Cyan';
        }
        if(count < 0){
            value.style.color = 'Blue'
        }
        if(count === 0){
            value.style.color = 'Purple'
        }
        value.textContent = count;
    });
});