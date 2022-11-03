chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "title": 'Text2Events: Create Event',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    
    const user_query = encodeURIComponent(info.selectionText);

    const text2eventCall = async () => {
        try {
            console.log(user_query);
            const response = await fetch('http://example.com/movies.json', {
                method: 'POST',
                body: user_query, // string or object
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            const myJson = await response.json();
            console.log(myJson);
        } catch (error) {
            console.log(error);
        }
    };
    text2eventCall();
})