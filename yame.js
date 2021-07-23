const filtercontainer=document.querySelector(".gallery-filter");
galleryitems=document.querySelectorAll(".gallery-item");
filtercontainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("filter-item")){
    filtercontainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filtervalue=e.target.getAttribute("data-filter");
    galleryitems.forEach((item) =>{
        if(item.classList.contains(filtervalue)){
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else{
            item.classList.remove("show")
            item.classList.add("hide");
        }
    });
    }
});