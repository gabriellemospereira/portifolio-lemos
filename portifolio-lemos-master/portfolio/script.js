const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 400) {
        btnTopo.classList.add("ativo")
    }else {
        btnTopo.classList.remove("ativo")
    }
});


btnTopo.addEventListener("click", ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"   
    });
});