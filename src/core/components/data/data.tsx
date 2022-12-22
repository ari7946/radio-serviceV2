import React from "react"

const getData = (language = "spanish") => {
  return {
    // // ********* 2016 *************************************************
    // sixteen: {
    //   yearTitle: "2016",
    //   year: "sixteen",
    //   allMonths:
    //     language === "spanish"
    //       ? [
    //           "enero",
    //           "febrero",
    //           "marzo",
    //           "abril",
    //           "mayo",
    //           "junio",
    //           "julio",
    //           "agosto",
    //           "septiembre",
    //           "octubre",
    //           "noviembre",
    //           "diciembre",
    //         ]
    //       : [
    //           "january",
    //           "february",
    //           "march",
    //           "april",
    //           "may",
    //           "june",
    //           "july",
    //           "august",
    //           "september",
    //           "october",
    //           "november",
    //           "december",
    //         ],
    //   monthsData: {
    //     // ************** Enero 2016
    //     enero: {
    //       monthTitle: "Enero 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile:
    //             "https://soundcloud.com/tu-hora-divina/11-2014-03-15-temp-1-ep-11?si=e5bc6be8fe3447569804cb5dc3083ac0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/07-Enero/09-01-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/07-Enero/16-01-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/07-Enero/23-01-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Febrero 2016
    //     febrero: {
    //       monthTitle: "Febrero 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/08-Febrero/06-02-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/08-Febrero/13-02-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/08-Febrero/20-02-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/08-Febrero/27-02-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Marzo 2016
    //     marzo: {
    //       monthTitle: "Marzo 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/09-Marzo/05-03-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/09-Marzo/12-03-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/09-Marzo/19-03-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/09-Marzo/26-03-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Abril 2016
    //     abril: {
    //       monthTitle: "Abril 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/10-Abril/02-04-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/10-Abril/16-04-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/10-Abril/30-04-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Mayo 2016
    //     mayo: {
    //       monthTitle: "Mayo 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/11-Mayo/07-05-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/11-Mayo/14-05-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/11-Mayo/21-05-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/11-Mayo/28-05-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Junio 2016
    //     junio: {
    //       monthTitle: "Junio 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/12-Junio/04-06-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/12-Junio/11-06-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/12-Junio/18-06-2016.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/12-Junio/25-06-2016.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Julio 2016
    //     julio: {
    //       monthTitle: "Julio 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/audio2016/2016-07-02/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/audio2016/2016-07-09/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/audio2016/2016-07-16/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/audio2016/2016-07-23/XEDX1010_13-00.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Agosto 2016
    //     agosto: {
    //       monthTitle: "Agosto 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/audio2016/2016-08-13/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/audio2016/2016-08-20/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/audio2016/2016-08-27/XEDX1010_13-00.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Septiembre 2016
    //     septiembre: {
    //       monthTitle: "Septiembre 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/audio2016/2016-09-03/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/audio2016/2016-09-17/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/audio2016/2016-09-24/XEDX1010_13-00.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Octubre 2016
    //     octubre: {
    //       monthTitle: "Octubre 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/audio2016/2016-10-01/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/audio2016/2016-10-08/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/audio2016/2016-10-29/XEDX1010_13-00.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Noviembre 2016
    //     noviembre: {
    //       monthTitle: "Noviembre 2016",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/audio2016/2016-11-05/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/audio2016/2016-11-12/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/audio2016/2016-11-19/XEDX1010_13-00.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/audio2016/2016-11-26/XEDX1010_13-00.mp3",
    //         },
    //       ],
    //     },
    //   }, //***** END 2016 monthsData */
    // }, //***** END 2016 sixteen prop */

    // // ********* 2015 *************************************************
    // fifteen: {
    //   yearTitle: "2015",
    //   year: "fifteen",
    //   allMonths:
    //     language === "spanish"
    //       ? ["julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    //       : ["july", "august", "september", "october", "november", "december"],
    //   monthsData: {
    //     // ************** Julio 2015
    //     julio: {
    //       monthTitle: "Julio 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/01-Julio/04-07-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/01-Julio/11-07-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/01-Julio/18-07-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/01-Julio/25-07-2015.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Agosto 2015
    //     agosto: {
    //       monthTitle: "Agosto 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/02-Agosto/01-08-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/02-Agosto/08-08-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/02-Agosto/22-08-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/02-Agosto/29-08-2015.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Septiembre 2015
    //     septiembre: {
    //       monthTitle: "Septiembre 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/03-Septiembre/05-09-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/03-Septiembre/12-09-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/03-Septiembre/19-09-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/03-Septiembre/26-09-2015.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Octubre 2015
    //     octubre: {
    //       monthTitle: "Octubre 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/04-Octubre/03-10-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/04-Octubre/10-10-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/04-Octubre/24-10-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/04-Octubre/31-10-2015.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Noviembre 2015
    //     noviembre: {
    //       monthTitle: "Noviembre 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/05-Noviembre/07-11-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/05-Noviembre/14-11-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/05-Noviembre/21-11-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/05-Noviembre/28-11-2015.mp3",
    //         },
    //       ],
    //     },
    //     // ************** Diciembre 2015
    //     diciembre: {
    //       monthTitle: "Diciembre 2015",
    //       audioData: [
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
    //           audioFile: "/audio/06-Diciembre/05-12-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
    //           audioFile: "/audio/06-Diciembre/12-12-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
    //           audioFile: "/audio/06-Diciembre/19-12-2015.mp3",
    //         },
    //         {
    //           audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
    //           audioFile: "/audio/06-Diciembre/26-12-2015.mp3",
    //         },
    //       ],
    //     },
    //   }, //***** END 2015 monthsData */
    // }, //***** END 2015 fifteen prop */

    // ********* 2014 *************************************************
    fourteen: {
      yearTitle: "2014",
      year: "fourteen",
      allMonths:
        language === "spanish"
          ? [
              "enero",
              "febrero",
              "marzo",
              "abril",
              "mayo",
              "junio",
              "julio",
              "agosto",
              "septiembre",
              "octubre",
              "noviembre",
              "diciembre",
            ]
          : [
              "january",
              "february",
              "march",
              "april",
              "may",
              "june",
              "july",
              "august",
              "september",
              "october",
              "november",
              "december",
            ],
      monthsData: {
        // ************** Enero 2014
        enero: {
          monthTitle: "Enero",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 1" : "Episode 1"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/1-2014-01-04-temp-1-ep-1?si=ba5fedbc7902441abf650e14638929fe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 2" : "Episode 2"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/2-2014-01-11-temp-1-ep-2?si=bf22327313ff47eeb92be515f2c86326&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 3" : "Episode 3"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-1?si=e70b038749264032ba912023962a8bba&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 4" : "Episode 4"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/4-2014-01-25-temp-1-ep-4?si=65541343e5f94d0eb6419b44fb955486&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Febrero 2014
        febrero: {
          monthTitle: "Febrero",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 5" : "Episode 5"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/5-2014-02-01-temp-1-ep-5?si=ac5e2189c2304806a59c12dfea503ee2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 6" : "Episode 6"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/6-2014-02-08-temp-1-ep-6?si=ac5e2189c2304806a59c12dfea503ee2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 7" : "Episode 7"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-3?si=cfcd7327858a4cdcba71d238367c4a61&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 8" : "Episode 8"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-4?si=e7595dce1ebd473d993ce7f456eeb53c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Marzo 2014
        marzo: {
          monthTitle: "Marzo",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 9" : "Episode 9"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-5?si=7a462b8bb46c47b484b7473b32f4fd39&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 10" : "Episode 10"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-6?si=50598d512a3f49258b0a463e355ecf5f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 11" : "Episode 11"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/11-2014-03-15-temp-1-ep-11?si=4fc06f67a5ac4a6894da8e2e8a467116&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 12" : "Episode 12"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/xedx1010-13-00?si=c794a449a4ea4211a9f7c8ed6386abd5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 13" : "Episode 13"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/13-2014-03-29-temp-2-ep-13?si=6b563f2448744e21947876c222ebd44f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Abril 2014
        abril: {
          monthTitle: "Abril",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 14" : "Episode 14"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/14-2014-04-05-temp-2-ep-14?si=6c10f3e3bb1c44bc95b7a20845eadbf7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 15" : "Episode 15"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/15-2014-04-12-temp-2-ep-15?si=bbdfec50ca9f4f158b7db683be588fcf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 16" : "Episode 16"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/16-2014-04-19-temp-2-ep-16?si=67e24ec1f9fd4638a7a00a94e14dea45&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 17" : "Episode 17"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/17-2014-04-26-temp-2-ep-17?si=358280cbe2384ad38782587ada75f197&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Mayo 2014
        mayo: {
          monthTitle: "Mayo",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 18" : "Episode 18"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/18-2014-05-10-temp-2-ep-18?si=6e41a68116374672a037875d48814a7e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 19" : "Episode 19"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/19-2014-05-17-temp-2-ep-19?si=a2b2b56857d5413ab6858312c6265aec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 20" : "Episode 20"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/20-2014-04-05-temp-2-ep-20?si=221d770158cd429e96fb5a01a9af3168&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 21" : "Episode 21"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/21-2014-05-31-temp-3-ep-1?si=c057a20f90904023ba37769ad4436052&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Junio 2014
        junio: {
          monthTitle: "Junio",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 22" : "Season 1 - Ep. 22"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/22-2014-06-07-temp-3-ep-2?si=bae8bed90be946968d960e911b1aa0a4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Julio 2014
        julio: {
          monthTitle: "Julio",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 23" : "Season 1 - Ep. 23"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/22-2014-06-07-temp-3-ep-3?si=753e601dd5f149feba49dee8822583c1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Agosto 2014
        agosto: {
          monthTitle: "Agosto",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 24" : "Season 1 - Ep. 24"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/24-2014-08-02-temp-3-ep-4?si=f88682b5804643b99cc980d24aacacd0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 25" : "Season 1 - Ep. 25"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/25-2014-08-09-temp-3-ep-5?si=fee2ac583fb7411fa2a2dc556187c406&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 26" : "Season 1 - Ep. 26"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/26-2014-08-16-temp-2-ep-6?si=52995823f3714225be9f5d5a1569c074&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 27" : "Season 1 - Ep. 27"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/27-2014-08-23-temp-2-ep-7?si=282255bb93f54ce59dde6a6daa56c5f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 28" : "Season 1 - Ep. 28"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/28-2014-08-30-temp-2-ep-8?si=6090422bcd18467c9b5e2a2c6ad6fabe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Septiembre 2014
        septiembre: {
          monthTitle: "Septiembre",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 29" : "Season 1 - Ep. 29"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/29-2014-09-06-temp-2-ep-9?si=28bba8e3f38943b58af6934339e355e5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 30" : "Season 1 - Ep. 30"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/30-2014-09-20-temp-2-ep-10?si=24459afd546545718dfb9d4179d58f9a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Octubre 2014
        octubre: {
          monthTitle: "Octubre",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 31" : "Season 1 - Ep. 31"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/30-2014-10-04-temp-1-octubre-1?si=9a52bf245ff44119ab269105e7593301&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 32" : "Season 1 - Ep. 32"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/32-2014-10-11-temp-1-octubre-1?si=8e047f8f80ad4a58bbd92d3a83eba7d5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 33" : "Season 1 - Ep. 33"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/33-2014-10-18-temp-1-octubre-3?si=f64ce2a5d5e4449f80e4d598b7a27f81&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 34" : "Season 1 - Ep. 34"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/34-2014-10-25-temp-1-octubre-4?si=b34ede7d070c43b5a33ff3732e0bc01b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Noviembre 2014
        noviembre: {
          monthTitle: "Noviembre",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 35" : "Season 1 - Ep. 35"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/35-2014-11-01-temp-1-noviembre-1?si=cafc2220413b47e5b57d0e7bf7defbc4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 36" : "Season 1 - Ep. 36"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/36-2014-11-08-temp-1-noviembre-2?si=9b7b2132408742469154886c551266bb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 37" : "Season 1 - Ep. 37"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/37-2014-11-15-temp-1-noviembre-3?si=a83c0d8b71694c9ca6971321ce8be57e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 38" : "Season 1 - Ep. 38"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/38-2014-11-22-temp-1-noviembre-4?si=5eec66c9b18d4d5b8133821cfdfec4d8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 39" : "Season 1 - Ep. 39"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/39-2014-11-29-temp-1-noviembre-5?si=edc97ccdb1e648978248f9cd0b115193&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
        // ************** Diciembre 2014
        diciembre: {
          monthTitle: "Diciembre",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Temp. 1 - Ep. 40" : "Season 1 - Ep. 40"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/40-2014-12-06-temp-1-deciembre-5?si=85cc954457ab4bc897c4252106645c54&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
          ],
        },
      },
    }, //***** END 2014 fifteen prop */
  }
}

const useData = () => {
  const [language, setLanguage] = React.useState("spanish")

  const handleLanguage = (lang) => {
    setLanguage(lang)
  }

  return [language, handleLanguage]
}

export { getData, useData }
