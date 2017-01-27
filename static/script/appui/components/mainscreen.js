require.def("hopstertest/appui/components/mainscreen",
    [
        "antie/widgets/component",
        "antie/widgets/button",
        "antie/widgets/label",
        "antie/widgets/verticallist",
        "antie/widgets/horizontallist",
        "antie/datasource",
        "hopstertest/appui/formatters/mainmenuformatter",
        "hopstertest/appui/formatters/carouselformatter",
        "hopstertest/appui/datasources/datafeed",
        "antie/widgets/horizontalcarousel"
    ],
    function (Component, Button, Label, VerticalList, HorizontalList, DataSource, MainMenuFormatter, CarouselFormatter, DataFeed, HorizontalCarousel) {

        // All components extend Component
        return Component.extend({
            init: function () {
                var self, verticalList;

                self = this;
                // It is important to call the constructor of the superclass
                this._super("mainscreencomponent");

                this.verticalList = new VerticalList("container");
                this.appendChildWidget(this.verticalList);

                //Add Horizontal List
                this._createMainMenu();

                this.addEventListener(
                    "beforerender",
                    function(ev) {
                        self._onBeforeRender(ev);
                    }
                );

                // calls Application.ready() the first time the component is shown
                // the callback removes itself once it's fired to avoid multiple calls.
                this.addEventListener("aftershow", function appReady(evt) {
                    self.getCurrentApplication().ready();
                    self.removeEventListener('aftershow', appReady);
                });
            },

            _createMainMenu: function () {
                var self, mainMenuFormatter, dataFeed;
                // Create a new formatter and feed
                mainMenuFormatter = new MainMenuFormatter();
                dataFeed = new DataFeed();

                // Create a DataSource, this uses the feed to get data and presents it to the formatter
                this._menuDataSource = new DataSource(this, dataFeed, "loadData");

                // Create a new carousel with the formatter
                this._mainMenu = new HorizontalList("mainMenu", mainMenuFormatter);

                // Add it to the component
                this.verticalList.appendChildWidget(this._mainMenu);

            },

            // Appending widgets on beforerender ensures they're still displayed
            // if the component is hidden and subsequently reinstated.
            _onBeforeRender: function (ev) {
                this._mainMenu.setDataSource(this._menuDataSource);
                this._carousel.setDataSource(this._dataSource);

            }
        });
    }
);