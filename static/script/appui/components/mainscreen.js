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
                var self = this;
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
                var self, mainMenuFormatter, dataFeed, thisComponent;
                self = this;
                // Create a new formatter and feed
                mainMenuFormatter = new MainMenuFormatter();
                dataFeed = new DataFeed();

                // Create a DataSource, this uses the feed to get data and presents it to the formatter
                this._menuDataSource = new DataSource(this, dataFeed, "loadData", [1]);

                // Create a new carousel with the formatter
                this._mainMenu = new HorizontalList("mainMenu", mainMenuFormatter);
                this._mainMenu.addEventListener("select", function(ev) {
                    self._selectMenuItem(ev,self);
                });

                // Add it to the component
                this.verticalList.appendChildWidget(this._mainMenu);
                this._mainMenu.setDataSource(this._menuDataSource);
            },

            _selectMenuItem: function (ev,self) {
                var elementPos =  appdata.map(function(x) {return x.id; }).indexOf(ev.target._listIndex);
                var object = appdata[elementPos];
                self.videoUrl = object.streamUrl;
                self.curData = object.carouselImages;
                self._createCarousel();
            },

            _createCarousel: function () {
                var self, carouselFormatter;
                self = this;

                //Destroy if exist
                if(this._carousel){
                    this.verticalList.removeChildWidget(this._carousel);
                }
                // Create a new formatter and feed
                carouselFormatter = new CarouselFormatter();

                // Create a new carousel with the formatter
                this._carousel = new HorizontalCarousel("simplecarousel", carouselFormatter, this.curData);

                // Add it to the component
                this.verticalList.appendChildWidget(this._carousel);

                this._carousel.addEventListener("select", function(ev) {
                    self._selectCarouselItem(ev,self);
                });
            },

            _selectCarouselItem:function (ev,self) {
                this.getCurrentApplication().pushComponent("maincontainer",
                 "hopstertest/appui/components/videoscreen",
                 {streamUrl:self.videoUrl});
            },

            // Appending widgets on beforerender ensures they're still displayed
            // if the component is hidden and subsequently reinstated.
            _onBeforeRender: function (ev) {
                if(this._carousel){
                    document.getElementById('mediaPlayerVideo').style.visibility = "hidden";
                    this._createCarousel();
                    this._carousel.focus();
                }
            }
        });
    }
);