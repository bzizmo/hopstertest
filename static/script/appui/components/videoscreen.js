/**
 * @preserve Copyright (c) 2013 British Broadcasting Corporation
 * (http://www.bbc.co.uk) and TAL Contributors (1)
 *
 * (1) TAL Contributors are listed in the AUTHORS file and at
 *     https://github.com/fmtvp/TAL/AUTHORS - please extend this file,
 *     not this notice.
 *
 * @license Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * All rights reserved
 * Please contact us for an alternative licence
 */

require.def("hopstertest/appui/components/videoscreen",
    [
        "antie/widgets/component",
        "antie/widgets/button",
        "antie/widgets/horizontallist",
        "antie/videosource",
        "antie/runtimecontext",
        "antie/devices/mediaplayer/mediaplayer",
        "antie/events/keyevent"
    ],
    function (Component, Button, HorizontalList, VideoSource, RuntimeContext, MediaPlayer, KeyEvent) {

        // All components extend Component
        return Component.extend({
            init: function () {
                var self = this;

                // It is important to call the constructor of the superclass
                this._super("videoscreencomponent");

                // Get a reference to the current application and device objects
                this._application = this.getCurrentApplication();
                this._device = this._application.getDevice();

                // Create a horizontal list that contains buttons to control the video
                var playerControlButtons = new HorizontalList("playerButtons");

                var rewind = new Button('rewind');
                playerControlButtons.appendChildWidget(rewind);
                rewind.addEventListener('select', function(evt) {
                    var currentTime = self.getPlayer().getCurrentTime();
                    self.getPlayer().playFrom(currentTime - 5);
                });

                var play = new Button('play');
                playerControlButtons.appendChildWidget(play);
                play.addEventListener('select', function() {
                    self.getPlayer().resume();
                });

                var pause = new Button('pause');
                playerControlButtons.appendChildWidget(pause);
                pause.addEventListener('select', function() {
                    self.getPlayer().pause();
                });

	            var fastForward = new Button('fastForward');
		        playerControlButtons.appendChildWidget(fastForward);
		        fastForward.addEventListener('select', function() {
                    var currentTime = self.getPlayer().getCurrentTime();
		            self.getPlayer().playFrom(currentTime + 5);
                });

                var back = new Button('back');
                playerControlButtons.appendChildWidget(back);
                back.addEventListener('select', function() {
                    self.destroyPlayer();
                });

                // Append the player control buttons to the component
                this.appendChildWidget(playerControlButtons);

                this.addEventListener('keydown', function(ev) {
                    self._onKeyDown(ev);
                });

                this.addEventListener("beforerender", function (ev) {
                    self.onBeforeRender(ev);
                });

            },

            onBeforeRender: function (ev) {

                this.videoUrl = ev.args.streamUrl;
                this.createVideoPlayer();
                document.getElementById('mediaPlayerVideo').style.visibility = "visible";
                this.hideBackground();
            },

            _onKeyDown: function(ev) {
                if(ev.keyCode == KeyEvent.VK_BACK) {
                    this.destroyPlayer();
                } 
            },

            getPlayer : function() {
                return this._player;
            },

            destroyPlayer : function() {
                this._player.stop();
                this.showBackground();
                this.parentWidget.back();
            },
            createVideoPlayer: function() {
                var self = this;

                this._player = RuntimeContext.getDevice().getMediaPlayer();
                this._player.reset();

                //this.videoUrl = "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4";
                //var videoType = "video/mp4";
                var videoType = "application/x-mpegURL";

                // Create the device's video object, set the media sources and start loading the media
                this._player.setSource(MediaPlayer.TYPE.VIDEO, this.videoUrl,videoType);

                self._player.beginPlayback();
            },
            hideBackground : function() {
                this._device.addClassToElement(document.body, 'background-none');
                this._application.getRootWidget().addClass('background-none');
            },
            showBackground : function() {
                this._device.removeClassFromElement(document.body, 'background-none');
                this._application.getRootWidget().removeClass('background-none');
            }
        });
    }
);
