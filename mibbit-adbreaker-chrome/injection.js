function getElementByXpath (root, path) {
  return document.evaluate(path, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function setTabTransparent (element_root) {
  element_body = getElementByXpath(element_root, '/div[1]');
  element_title = getElementByXpath(element_root, '/div[2]');
  if (!element_root)
    return;
  if (!element_root.getAttribute('cleared')) {
    element_root.setAttribute('cleared', '1');
    element_root.style.backgroundImage = 'none';
    element_root.style.background = 'transparent';
  }
  if (element_body && !element_body.getAttribute('cleared')) {
    element_body.setAttribute('cleared', '1');
    element_body.style.background = 'transparent';
  }
  if (element_title && !element_title.getAttribute('cleared')) {
    element_title.setAttribute('cleared', '1');
    element_title.style.background = 'transparent';
  }
}

if (window.top.length > 0 && document.referrer && window.location.hostname.match(/^widget[0-9]+\.mibbit\.com$/i) != null) {
  head = document.createElement('style');
  head.innerHTML = 'html,body {background: transparent !important;}';
  document.body.appendChild(head);
  delete head;
  var _Interval = setInterval(function() {
    frame1 = getElementByXpath(document, '//*[@id="chats"]/div[1]');
    if (frame1)
      setTabTransparent(frame1);
    frame2 = getElementByXpath(document, '//*[@id="chats"]/div[2]');
    if (frame2)
      setTabTransparent(frame2);
  }, 1000);
}
