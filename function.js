function scrollToSection(sectionId){
    const elt = document.getElementById(sectionId);
    if(!elt) return;
    elt.scrollIntoView({
        behavior: "smooth"
    });
}

window.scrollToSection = scrollToSection;