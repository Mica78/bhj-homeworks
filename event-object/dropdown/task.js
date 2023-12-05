const btns = document.getElementsByClassName("dropdown");


for(const btn of btns){
    btn.addEventListener("click", (event) => {
        btn.children[1].classList.toggle("dropdown__list_active");
        btn.children[0].textContent = event.target.textContent;
        event.target.href = "#";
    });
}
