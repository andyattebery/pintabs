safari.application.addEventListener("popover", handlePopoverEvent, false);

function handlePopoverEvent(event)
{  
  function addTabToList(list, title) {
    var tabListItem = document.createElement('li');
    tabListItem.appendChild(document.createTextNode(title));
    list.appendChild(tabListItem);
  }
  
  function submitTags() {
    var tabs = safari.application.activeBrowserWindow.tabs;
    tabs.forEach(function(element, index, array) {
      console.log(element.url);
    });
  }
  
  var tabs = safari.application.activeBrowserWindow.tabs;
  var tabsList = document.getElementById("tabsList");
  var tabsListItems = tabsList.getElementsByTagName("li");
  tabsListItems.forEach(function(element, index, array) {
    tabsList.removeChild(element);
  });
  tabs.forEach(function(element, index, array) {
    addTabToList(tabsList, element.title)
  });
  
  var form = document.getElementById("tagsForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitTags();
  });
}