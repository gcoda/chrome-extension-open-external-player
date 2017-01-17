openWithGnomeMpv = function(event){
  var query = event.linkUrl || event.selectionText || event.pageUrl;
  chrome.tabs.create({url: "gnomempv://" + query, active: false}, function (tab) {
    setTimeout(()=>chrome.tabs.remove(tab.id),100)
  });
};

chrome.contextMenus.create({
  title: "Open in Gnome-Mpv",
  contexts:["all"],
  onclick: openWithGnomeMpv
});