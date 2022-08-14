const countersEl = document.querySelectorAll(".counter")

countersEl.forEach((x)=>{
    x.innerHTML = "0";
    incrementCounter();
    function incrementCounter(){
        let currNum = +x.innerText;
        const ceilNum = x.getAttribute("data-ceil")
        const increment = ceilNum / 15;
        currNum = Math.ceil(currNum + increment);
        x.innerText = currNum;
        if(currNum < ceilNum){
            setTimeout(incrementCounter,50);
        }
    }
});