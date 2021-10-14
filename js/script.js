/*---middle inner sellect-----*/

const $ = document;
const nice_sellect = $.getElementById("nice-select");
const options = $.getElementById("options");
const current = $.getElementsByClassName("current");

// document.addEventListener("click", openSellect);


nice_sellect.addEventListener("click", function() {
    this.classList.toggle("open")
});
options.addEventListener("click", function(event) {
    const listItem = event.target;
    const value = listItem.attributes.value.value;

    current[0].innerText = value;

});