var focusList = ["about-nav", "experience-nav", "projects-nav"]
function focusSelect(event){
    var element = document.getElementById(event);
    for (elem of focusList) {
        console.log(elem);
        listElem = document.getElementById(elem);
        if (elem != event){
            if (listElem.classList.contains("selected")) {
                listElem.classList.toggle("selected");
                listElem.classList.toggle("unselected");
            }
        }
    }
    element.classList.toggle("selected");
    element.classList.toggle("unselected");

}