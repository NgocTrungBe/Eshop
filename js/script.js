/*---middle inner sellect-----*/

const $ = document;
const nice_sellect = $.getElementById("nice-select");
const options = $.getElementById("options");
const current = $.getElementsByClassName("current");

// nav trending
const nav_items = $.getElementById("nav_main").querySelectorAll("li");
const item_active = $.getElementsByClassName("nav-item active");
const tab_pane = $.getElementsByClassName("tab-pane");
const tab_pane_active = $.getElementsByClassName("tab-pane active");
const tab_pane_fade = $.getElementsByClassName("tab-pane fade");
const tab_pane_show = $.getElementsByClassName("tab-pane show");




// header inner sticky

window.addEventListener("scroll", function() {
    const header = $.querySelector(".header-inner");

    header.classList.toggle("sticky", window.scrollY > 100);
})

nice_sellect.addEventListener("click", function() {
    this.classList.toggle("open")
});
options.addEventListener("click", function(event) {
    const listItem = event.target;
    const value = listItem.attributes.value.value;

    current[0].innerText = value;

});


nav_items.forEach((item, index) => {
    item.onclick = function() {
        item_active[0].classList.remove("active");
        this.classList.add("active")




        if (tab_pane_active.length != 0 && tab_pane_fade.length != 0 && tab_pane_show.length != 0) {
            tab_pane_active[0].classList.remove("active");
            tab_pane_fade[0].classList.remove("fade");
            tab_pane_show[0].classList.remove("show");
        }
        if (tab_pane.length != 0 && tab_pane.length > index) {
            tab_pane[index].classList.add("active");
            tab_pane[index].classList.add("fade");
            tab_pane[index].classList.add("show");
        }








    }
})