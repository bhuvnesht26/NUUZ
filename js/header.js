document.addEventListener("DOMContentLoaded", function () {
   
            renderHeader();
            renderDrawer();
});

function renderHeader() {
    
    document.getElementById("header-container").innerHTML = `
    
        <div class="mdl-layout__header-row">
            <span class="android-title mdl-layout-title">
                <img class="android-logo-image" src="images/android-logo.png">
            </span>
          <!-- Add spacer, to align navigation to the right in desktop -->
            <div class="android-header-spacer mdl-layout-spacer"></div>
          
          <!-- Navigation -->
            <div class="android-navigation-container">
            <nav class="android-navigation mdl-navigation">
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="index.html">Top Headlines</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="business.html">Business</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="politics.html">Politics</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="sports.html">Sports</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="entertainment.html">Entertainment</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="health.html">Health</a>
            </nav>
          </div>
          <span class="android-mobile-title mdl-layout-title">
            <img class="android-logo-image" src="images/android-logo.png">
          </span>
        </div>
        `;
}

function renderDrawer() {
    
    document.getElementById("header-drawer").innerHTML = `
    
        <span class="mdl-layout-title">
          <img class="android-logo-image" src="images/android-logo-white.png">
        </span>
        <nav class="mdl-navigation">
              <a class="mdl-navigation__link " href="index.html">Top Headlines</a>
              <a class="mdl-navigation__link " href="business.html">Business</a>
              <a class="mdl-navigation__link " href="politics.html">Politics</a>
              <a class="mdl-navigation__link " href="sports.html">Sports</a>
              <a class="mdl-navigation__link " href="entertainment.html">Entertainment</a>
              <a class="mdl-navigation__link " href="contests.html">Contests</a>
          <div class="android-drawer-separator"></div>
          <span class="mdl-navigation__link" href="">Privacy Policy</span>
          
        </nav>
        `;
}