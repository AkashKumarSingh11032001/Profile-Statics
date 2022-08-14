const countersEl = document.querySelectorAll(".counter")

countersEl.forEach((x)=>{
    x.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currNum = +x.innerText;
        const ceilNum = x.getAttribute("data-ceil")
        const increment = ceilNum / 15;
        currNum = Math.ceil(currNum + increment);
        
        if(currNum < ceilNum){
            x.innerText = currNum;
            setTimeout(incrementCounter,50);
        }else{
            x.innerText = ceilNum;
        }
    }
});