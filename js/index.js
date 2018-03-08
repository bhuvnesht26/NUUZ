
document.addEventListener("DOMContentLoaded", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', url);
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData.articles);
            renderPageHeading();
            } 
        else {
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
            <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div class="mdl-card__media">
                <img src="${news.urlToImage}">
              </div>
              <div class="mdl-card__title">
                 <h4 class="mdl-card__title-text">${news.title}</h4>
              </div>
              <div class="mdl-card__supporting-text">
                <span class="mdl-typography--font-light mdl-typography--subhead">${news.description}</span>
              </div>
              <div class="mdl-card__actions">
                 <a class="android-link mdl-button mdl-js-button mdl-typography--font-light" href="${news.url}" target="_blank">
                   ${news.source.name}
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

function renderPageHeading() {
    document.getElementById("page-heading").innerHTML = pageheading;
}

var pageName = (function () {
        var a = window.location.href,
            b = a.lastIndexOf("/");
        return a.substr(b + 1);
    }());

var url = (function () {
    
    switch(pageName) {
    case "index.html":
        url = "https://bhuvnesht26.github.io/api/index-api.json";
        break;
    case "business.html":
        url = "https://bhuvnesht26.github.io/api/business-api.json";
        break;
    case "entertainment.html":
        url = "https://bhuvnesht26.github.io/api/entertainment-api.json";
        break;
    case "health.html":
        url = "https://bhuvnesht26.github.io/api/health-api.json";
        break;
    case "politics.html":
        url = "https://bhuvnesht26.github.io/api/politics-api.json";
        break;
    case "sports.html":
        url = "https://bhuvnesht26.github.io/api/sports-api.json";
        break;
    default:
        url = "https://bhuvnesht26.github.io/api/index-api.json";
}
    return url;
}());

var pageheading = (function (){
    
    switch(pageName) {
    case "index.html":
        pageheading = "Top Headlines";
        break;
    case "business.html":
        pageheading = "Top Business News";
        break;
    case "entertainment.html":
        pageheading = "Top Entertainment News";
        break;
    case "health.html":
        pageheading = "News to keep you Fit";
        break;
    case "politics.html":
        pageheading = "Top Political News";
        break;
    case "sports.html":
        pageheading = "Sports Feed";
        break;
    default:
        pageheading = "Top Headlines";
}
    return pageheading;
}());
