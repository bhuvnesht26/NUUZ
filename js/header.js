document.addEventListener("DOMContentLoaded", function () {

            renderHeader();
            renderDrawer();
});

function renderHeader() {

    document.getElementById("header-container").innerHTML = `

        <div class="mdl-layout__header-row">
        <a href="../index/index.html">
            <span class="android-title mdl-layout-title">
                <img class="nuuz-logo-image" src="../images/nuuz-logo.png">
            </span>
        </a>
          <!-- Add spacer, to align navigation to the right in desktop -->
            <div class="android-header-spacer mdl-layout-spacer"></div>

          <!-- Navigation -->
            <div class="android-navigation-container">
            <nav class="android-navigation mdl-navigation">
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../index/index.html">Home</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../business-news/business.html">Business</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../entertainment-news/entertainment.html">Entertainment</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../politics-news/politics.html">Politics</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../technology-news/technology.html">Technology</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../sports-news/sports.html">Sports</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../health-news/health.html">Health</a>
            </nav>
          </div>
          <a href="../index/index.html">
            <span class="android-mobile-title mdl-layout-title">
                <img class="nuuz-logo-image" src="../images/nuuz-logo.png">
            </span>
          </a>
          <button class="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
            <li class="mdl-menu__item"><a class="mdl-navigation__link mdl-typography--text-uppercase" href="Contact.html">Contact</a></li>
          </ul>
        </div>
        `;
}

function renderDrawer() {

    document.getElementById("header-drawer").innerHTML = `

        <a href="../index/index.html">
        <span class="mdl-layout-title">
          <img class="nuuz-logo-image" src="../images/nuuz-logo-white.png">
        </span>
        </a>
        <nav class="mdl-navigation">
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../index/index.html">Home</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../business-news/business.html">Business</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../entertainment-news/entertainment.html">Entertainment</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../politics-news/politics.html">Politics</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../technology-news/technology.html">Technology</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../sports-news/sports.html">Sports</a>
              <a class="mdl-navigation__link mdl-typography--text-uppercase" href="../health-news/health.html">Health</a>
          <div class="android-drawer-separator"></div>
          <span class="mdl-navigation__link" href="">Privacy Policy</span>

        </nav>
        `;
}