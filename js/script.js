var url = "https://bhuvnesht26.github.io/api/news-api.json";

document.addEventListener("DOMContentLoaded", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',url);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
            } else {
                    console.log("We connected to the server, but it returned an error.");
                }
            };

    ourRequest.onerror = function() {
        console.log("Connection error");
        };

    ourRequest.send();

});

function newsTemplate(news) {
    
    return `
            <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img src="${news["Articles Urltoimage"]}">
              </div>
              <div class="mdl-card__title">
                 <h4 class="mdl-card__title-text">${news["Articles Title"]}</h4>
              </div>
              <div class="mdl-card__supporting-text">
                <span class="mdl-typography--font-light mdl-typography--subhead">${news["Articles Description"]}</span>
              </div>
              <div class="mdl-card__actions">
                 <a class="android-link mdl-button mdl-js-button mdl-typography--font-light" href="${news["Articles Url"]}" target="_blank">
                   ${news["Articles Source Name"]}
                 </a>
              </div>
            </div>
                
            
        `;
}

function renderHTML(htmlData) {
document.getElementById("news-container").innerHTML = `
  ${htmlData.map(newsTemplate).join("")}
`;
}

