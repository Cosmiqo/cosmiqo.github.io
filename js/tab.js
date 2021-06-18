var i, defaultTab;

defaultTab = document.getElementsByClassName("defaultOpen");
for (i = 0; i < defaultTab.length; i++) {
    defaultTab[i].click();
}

function openTab(evt, itemName, content, link) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(content);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(link);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(itemName).style.display = "block";
    evt.currentTarget.className += " active";
}