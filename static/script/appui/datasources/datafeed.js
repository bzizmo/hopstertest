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

require.def("hopstertest/appui/datasources/datafeed",
    [
        "antie/class"
    ],
    function(Class) {
        return Class.extend({
            // You will probably want to do something
            // more useful then returning static data.
            // An array of objects is expected.
            loadData : function(callbacks) {
                callbacks.onSuccess(
                    [
                        {
                            "id":"1",
                            "title":"Pingu",
                            "thumbnail" : "http://lh3.googleusercontent.com/Vo5vX5D8QRXwMN5TO8i7kxH4yITE0fnNB6R_nQbC1DSZitw9CUuUQkv__-W2HwCHxanU2JmNoseAxcWJqRj0PHnjQRzK",
                            "streamUrl": "http://player.ooyala.com/player/all/gyMDk0cDr6snzZQW8Uz6vuF6wfHYi9eI.m3u8",
                            "mainBg":"static/img/pingu/pingu_main.jpg",
                            "carouselImages": [
                                "static/img/pingu/pingu2.jpg",
                                "static/img/pingu/pingu3.jpg",
                                "static/img/pingu/pingu4.jpg",
                                "static/img/pingu/pingu5.jpg",
                                "static/img/pingu/pingu6.jpg"
                            ]
                        },
                        {
                            "id":"2",
                            "title":"Moshi Monsters",
                            "thumbnail" : "http://lh3.googleusercontent.com/et-6a3fwp8M6LwZppacdvvN_sU-dDBQOz-YK7vIg_tiKJWPpt5yrMJhaoiqiXStQmfp_VGaG6XMP8n6TBvXdzIqRSgykeQ",
                            "streamUrl": "http://player.ooyala.com/player/all/9pZ21rdjraYF-3ske-qYGs3ZedoekNp-.m3u8",
                            "mainBg":"static/img/moshi/moshi_main.jpg",
                            "carouselImages": [
                                "static/img/moshi/moshi1.png",
                                "static/img/moshi/moshi2.png",
                                "static/img/moshi/moshi3.png",
                                "static/img/moshi/moshi4.jpeg"
                            ]
                        },
                        {
                            "id":"3",
                            "title":"Bob the Builder",
                            "thumbnail" : "http://lh3.googleusercontent.com/6snwTeuDaLcObRPsXTadq8co6jTmpKxEPN2ww7oIoz65QvwqglJwhjg12zagRN0WwH-urlNP8Xazj6X0QRlarKdt4wc",
                            "streamUrl": "http://player.ooyala.com/player/all/A4MTY0cDqOSJUWZe39tbjf0PZmdb37I8.m3u8",
                            "mainBg":"static/img/bob/bob_main.jpg",
                            "carouselImages": [
                                "static/img/bob/bob1.jpg",
                                "static/img/bob/bob2.jpg",
                                "static/img/bob/bob3.jpg",
                                "static/img/bob/bob4.jpg",
                                "static/img/bob/bob5.jpg",
                                "static/img/bob/bob6.jpg"
                            ]
                        },
                        {
                            "id":"4",
                            "title":"Fireman Sam",
                            "thumbnail" : "http://lh3.googleusercontent.com/CvBJ-WAZc_90oWRbIubYfIeMTPLBYWtoFEKUKHeAicxTkk2GYlGLnUWZ9tP3VlDvagZw-w7ZVyOa4iBejVK3l69EoyT5",
                            "streamUrl": "http://player.ooyala.com/player/all/44cmU3MDE63NLA9qRIOlMv6U7kdDftOH.m3u8",
                            "mainBg":"static/img/sam/sam_main.jpg",
                            "carouselImages": [
                                "static/img/sam/sam1.jpg",
                                "static/img/sam/sam2.jpg",
                                "static/img/sam/sam3.jpg",
                                "static/img/sam/sam4.jpg",
                                "static/img/sam/sam5.jpg",
                            ]
                        },
                        {
                            "id":"5",
                            "title":"Babar",
                            "thumbnail" : "http://lh3.googleusercontent.com/HmJmy05FDjd_I2LabZcEG_RoBZtM_IpQmFx-ZmxdGpFg2zHYPHlG8YBW1A0-lVjIhNo2zVeX8hG6zhwODLk6ICHARqz4",
                            "streamUrl": "http://player.ooyala.com/player/all/R0NGgzcToeB9TWoiWk2xlGqi3HZdLtpn.m3u8",
                            "mainBg":"static/img/babar/babar_main.jpg",
                            "carouselImages": [
                                "static/img/babar/babar1.jpg",
                                "static/img/babar/babar2.jpg",
                                "static/img/babar/babar3.jpg"
                            ]
                        },
                        {
                            "id":"6",
                            "title":"Fifi",
                            "thumbnail" : "http://lh3.googleusercontent.com/Fjhs7Rva3CzMSrnWGtB6Qk3xbUh46JzoognXR-j3FmXnOpvCDlZzyebh087YXlexcXyqsrveu48sK3j2iOx1cWSfAL587A",
                            "streamUrl": "http://player.ooyala.com/player/all/RtNGFjdDprUbXmOPa9oX2hEgyvp_G9gD.m3u8",
                            "mainBg":"static/img/fifi/fifi_main.jpg",
                            "carouselImages": [
                                "static/img/fifi/fifi1.jpg",
                                "static/img/fifi/fifi2.jpg",
                                "static/img/fifi/fifi3.jpg",
                                "static/img/fifi/fifi4.jpg"
                            ]
                        }
                    ]
                );
            }
        });
    });