/*---middle inner sellect-----*/

const $ = document;
const nice_sellect = $.querySelectorAll(".nice-select");
const options = $.querySelectorAll("#options");
const current = $.querySelectorAll(".current");

//nav trending
const nav_main = $.getElementById("nav_main");

const item_active = $.getElementsByClassName("nav-item active");
const tab_pane = $.getElementsByClassName("tab-pane");
const tab_pane_active = $.getElementsByClassName("tab-pane active");
const tab_pane_fade = $.getElementsByClassName("tab-pane fade");
const tab_pane_show = $.getElementsByClassName("tab-pane show");

//pro features

const pro_feature = $.querySelector(".pro-features");

pro_feature.addEventListener("click", function() {
    this.classList.toggle("active");
});

// scroll up
const scroll_up = $.querySelector("#scrollUp");


// // header inner sticky and scroll up handle

window.addEventListener("scroll", function() {

    const header = $.querySelector(".header-inner");
    const middle_inner = $.querySelector(".middle-inner");
    header.classList.toggle("sticky", window.scrollY > 100);
    console.log(header)
    middle_inner.classList.toggle("sticky", window.scrollY > 50);
    if (window.scrollY > 100) {
        scroll_up.style.visibility = "visible";
        scroll_up.style.opacity = 1;

    } else {
        scroll_up.style.visibility = "hidden";
        scroll_up.style.opacity = 0;
    }
})



//nice select handle
nice_sellect.forEach((item, index) => {
    item.addEventListener("click", function() {
        const nice_sellect_open = $.querySelector(".nice-select.open")
        if (nice_sellect_open != null) {
            this.classList.toggle("open")
            nice_sellect_open.classList.remove("open")
        } else {
            this.classList.toggle("open")
        }
    });
    options[index].addEventListener("click", function(event) {
        const listItem = event.target;
        const value = listItem.attributes.value.value;
        current[index].innerText = value;

    });
})


// trending nav handle
if (nav_main != null) {
    const nav_items = nav_main.querySelectorAll("li");
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

}


//payment check box handle

const checkbox_list = $.querySelectorAll(".checkbox-inline");

checkbox_list.forEach((item, index) => {
    item.addEventListener("click", function() {
        this.classList.toggle("checked");
    })
})

//mobile search handle
const mobile_search_box = $.querySelector(".mobile-search-top");
const mobile_search_icon = $.querySelector(".search-top-icon");


mobile_search_icon.addEventListener("click", function() {
    mobile_search_box.classList.toggle("active");
})

//mobile nav handle

const mobile_nav = $.querySelector(".mobile-nav");
const slicknav = $.querySelector(".slicknav-nav");
const mobile_nav_icon = $.querySelector(".slicknav-icon");
const slicknav_parent = $.querySelector(".slicknav-parent");

jQuery(document).ready(function($) {
    $('.slicknav-icon').click(function() {
        $('.slicknav-nav').toggleClass('slicknav-open', 300);
    });

    $('.slicknav-parent').click(function() {
        $('.slicknav-parent').toggleClass('slicknav-open', 300);
    });

});