import React from "react"

const getData = (language = "spanish") => {
  return {
    // ********* 2016 *************************************************
    sixteen: {
      yearTitle: "2016",
      year: "sixteen",
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
        // ************** Enero 2016
        enero: {
          monthTitle: "Enero 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile:
                "https://soundcloud.com/tu-hora-divina/11-2014-03-15-temp-1-ep-11?si=e5bc6be8fe3447569804cb5dc3083ac0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/07-Enero/09-01-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/07-Enero/16-01-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/07-Enero/23-01-2016.mp3",
            },
          ],
        },
        // ************** Febrero 2016
        febrero: {
          monthTitle: "Febrero 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/08-Febrero/06-02-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/08-Febrero/13-02-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/08-Febrero/20-02-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/08-Febrero/27-02-2016.mp3",
            },
          ],
        },
        // ************** Marzo 2016
        marzo: {
          monthTitle: "Marzo 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/09-Marzo/05-03-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/09-Marzo/12-03-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/09-Marzo/19-03-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/09-Marzo/26-03-2016.mp3",
            },
          ],
        },
        // ************** Abril 2016
        abril: {
          monthTitle: "Abril 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/10-Abril/02-04-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/10-Abril/16-04-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/10-Abril/30-04-2016.mp3",
            },
          ],
        },
        // ************** Mayo 2016
        mayo: {
          monthTitle: "Mayo 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/11-Mayo/07-05-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/11-Mayo/14-05-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/11-Mayo/21-05-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/11-Mayo/28-05-2016.mp3",
            },
          ],
        },
        // ************** Junio 2016
        junio: {
          monthTitle: "Junio 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/12-Junio/04-06-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/12-Junio/11-06-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/12-Junio/18-06-2016.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/12-Junio/25-06-2016.mp3",
            },
          ],
        },
        // ************** Julio 2016
        julio: {
          monthTitle: "Julio 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2016/2016-07-02/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2016/2016-07-09/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2016/2016-07-16/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2016/2016-07-23/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Agosto 2016
        agosto: {
          monthTitle: "Agosto 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2016/2016-08-13/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2016/2016-08-20/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2016/2016-08-27/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Septiembre 2016
        septiembre: {
          monthTitle: "Septiembre 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2016/2016-09-03/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2016/2016-09-17/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2016/2016-09-24/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Octubre 2016
        octubre: {
          monthTitle: "Octubre 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2016/2016-10-01/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2016/2016-10-08/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2016/2016-10-29/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Noviembre 2016
        noviembre: {
          monthTitle: "Noviembre 2016",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2016/2016-11-05/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2016/2016-11-12/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2016/2016-11-19/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2016/2016-11-26/XEDX1010_13-00.mp3",
            },
          ],
        },
      }, //***** END 2016 monthsData */
    }, //***** END 2016 sixteen prop */

    // ********* 2015 *************************************************
    fifteen: {
      yearTitle: "2015",
      year: "fifteen",
      allMonths:
        language === "spanish"
          ? ["julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
          : ["july", "august", "september", "october", "november", "december"],
      monthsData: {
        // ************** Julio 2015
        julio: {
          monthTitle: "Julio 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/01-Julio/04-07-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/01-Julio/11-07-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/01-Julio/18-07-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/01-Julio/25-07-2015.mp3",
            },
          ],
        },
        // ************** Agosto 2015
        agosto: {
          monthTitle: "Agosto 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/02-Agosto/01-08-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/02-Agosto/08-08-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/02-Agosto/22-08-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/02-Agosto/29-08-2015.mp3",
            },
          ],
        },
        // ************** Septiembre 2015
        septiembre: {
          monthTitle: "Septiembre 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/03-Septiembre/05-09-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/03-Septiembre/12-09-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/03-Septiembre/19-09-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/03-Septiembre/26-09-2015.mp3",
            },
          ],
        },
        // ************** Octubre 2015
        octubre: {
          monthTitle: "Octubre 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/04-Octubre/03-10-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/04-Octubre/10-10-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/04-Octubre/24-10-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/04-Octubre/31-10-2015.mp3",
            },
          ],
        },
        // ************** Noviembre 2015
        noviembre: {
          monthTitle: "Noviembre 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/05-Noviembre/07-11-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/05-Noviembre/14-11-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/05-Noviembre/21-11-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/05-Noviembre/28-11-2015.mp3",
            },
          ],
        },
        // ************** Diciembre 2015
        diciembre: {
          monthTitle: "Diciembre 2015",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/06-Diciembre/05-12-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/06-Diciembre/12-12-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/06-Diciembre/19-12-2015.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/06-Diciembre/26-12-2015.mp3",
            },
          ],
        },
      }, //***** END 2015 monthsData */
    }, //***** END 2015 fifteen prop */

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
          monthTitle: "Enero 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/1-2014-01-04-temp-1-ep-1?si=ba5fedbc7902441abf650e14638929fe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "https://soundcloud.com/tu-hora-divina/2-2014-01-11-temp-1-ep-2?si=bf22327313ff47eeb92be515f2c86326&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
              isFromSoundCloud: true
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-01-18/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-01-25/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Febrero 2014
        febrero: {
          monthTitle: "Febrero 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-02-01/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-02-08/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-02-15/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-02-22/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Marzo 2014
        marzo: {
          monthTitle: "Marzo 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-03-01/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-03-08/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-03-15/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-03-22/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Abril 2014
        abril: {
          monthTitle: "Abril 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-04-05/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-04-12/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-04-19/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-04-26/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Mayo 2014
        mayo: {
          monthTitle: "Mayo 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-05-10/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-05-17/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-05-24/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-05-31/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Junio 2014
        junio: {
          monthTitle: "Junio 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-06-07/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Julio 2014
        julio: {
          monthTitle: "Julio 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-07-19/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Agosto 2014
        agosto: {
          monthTitle: "Agosto 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-08-02/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-08-09/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-08-16/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-08-23/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Septiembre 2014
        septiembre: {
          monthTitle: "Septiembre 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-09-06/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-09-20/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Octubre 2014
        octubre: {
          monthTitle: "Octubre 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-10-04/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-10-11/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-10-18/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-10-25/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Noviembre 2014
        noviembre: {
          monthTitle: "Noviembre 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-11-01/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 2" : "Episode 2"}`,
              audioFile: "/audio/audio2014/2014-11-08/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 3" : "Episode 3"}`,
              audioFile: "/audio/audio2014/2014-11-15/XEDX1010_13-00.mp3",
            },
            {
              audioTitle: `${language === "spanish" ? "Episodio 4" : "Episode 4"}`,
              audioFile: "/audio/audio2014/2014-11-22/XEDX1010_13-00.mp3",
            },
          ],
        },
        // ************** Diciembre 2014
        diciembre: {
          monthTitle: "Diciembre 2014",
          audioData: [
            {
              audioTitle: `${language === "spanish" ? "Episodio 1" : "Episode 1"}`,
              audioFile: "/audio/audio2014/2014-12-06/XEDX1010_13-00.mp3",
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
