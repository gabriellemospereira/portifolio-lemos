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


const elementos = document.querySelectorAll(
    ".card-projeto, .skill div, .hero-texto, .hero-imagem"
);


const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar")
        }
    });
});

elementos.forEach((elementos) => {
    observer.observe(elementos);
});