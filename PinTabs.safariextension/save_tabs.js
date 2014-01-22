(function() {

  function onLoad() {
    
    console.log("loaded");
    
    var form = document.getElementById("tagsForm");
    
    function submitTags() {
      var tabs = safari.application.activeBrowserWindow.tabs;
      tabs.forEach(function(element, index, array) {
        console.log(element.url);
      });
    }
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      submitTags();
    });
    
  }
  
  function onPopover(event) {
    
    function addTabToList(list, title) {
      var tabListItem = document.createElement('li');
      tabListItem.appendChild(document.createTextNode(title));
      list.appendChild(tabListItem);
    }
    
    var tabs = safari.application.activeBrowserWindow.tabs;
    var tabsList = document.getElementById("tabsList");
    var tabsListItems = tabsList.getElementsByTagName("li");
    
    for (var i = 0, len = tabsListItems.length; i < len; i++) {
      tabsList.removeChild(tabsListItems[i]);
    }
    
    tabs.forEach(function(element, index, array) {
	  if (element.title) {
        addTabToList(tabsList, element.title)
      }
    });
    
  }
  
  safari.application.addEventListener("popover", onPopover, false);
  window.onload = onLoad;

}());
