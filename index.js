const countersEl = document.querySelectorAll(".counter")

countersEl.forEach((x)=>{
    x.innerHTML = "0";
    incrementCounter();
    function incrementCounter(){
        let currNum = +x.innerText;
        const ceilNum = x.getAttribute("data-ceil")
    }
});