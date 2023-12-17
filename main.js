let sec = 0;
let iv_id = null;

function start(){
    if (iv_id === null) {
        iv_id = setInterval(function(){
            sec++;
            document.getElementById("time").textContent = sec;
            console.log(sec);
        }, 1000);
    }
}

function pause(){
    if (iv_id !== null) {
        clearInterval(iv_id);
        iv_id = null;
    }
}

function reset(){
    clearInterval(iv_id);
    iv_id = null;
    sec = 0;
    document.getElementById("time").textContent = sec;
}