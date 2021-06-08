chrome.runtime.onInstalled.addListener(() => {
    console.log('onInstalled');
});

/*
 send messages in a svelte component, e.g.:
 
    chrome.runtime.sendMessage(
      {
        payload: count,
        topic: 'clickCounter'
      },
      (response) => {
        console.log('response', response);
      }
    );
*/
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        console.log('request', request);
        
        !!sendResponse && sendResponse({});

        return true;
    }
  );