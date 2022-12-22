/* eslint-disable @typescript-eslint/no-floating-promises */
import Head from "next/head"
import React, { useState, useEffect } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import MainContent from '../components/main-content/main-content.component';
import styles from './layout.module.scss';
import { getData, useData } from '../components/data/data';
import { useRouter } from 'next/router';

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  const data = getData('spanish');
  const router = useRouter();

  const initialAudioData = data.fourteen.monthsData.enero.audioData;
  const initialAllMonths = data.fourteen.allMonths;
  const initialYearTitle = data.fourteen.yearTitle;
  const initialMonthTitle = data.fourteen.monthsData.enero.monthTitle;
  const initialYear = data.fourteen.year;

  const [yearTitle, setYearTitle] = useState(initialYearTitle);
  const [allMonths, setAllMonths] = useState(initialAllMonths);
  const [audioData, setAudioData] = useState(initialAudioData);
  const [monthTitle, setMonthTitle] = useState(initialMonthTitle);
  const [year, setYear] = useState(initialYear);

  const handleMonth = (month) => {
    const monthData = data[year].monthsData[month];
    const { monthTitle, audioData } = monthData;
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }

  const handleYear = async (yearSelected) => {
    const { yearTitle, year, allMonths, monthsData } = await data[yearSelected];

    // 2016 and 2016 both begin in Janurary, while 2015 begins in July.
    // (according to the data available, obviously not on an actual calendar)
    const { monthTitle, audioData } =
      yearSelected === 'fifteen' ? monthsData.julio : monthsData.enero;

    setAllMonths((_) => allMonths);
    setYearTitle((_) => yearTitle);
    setYear((_) => year);
    setMonthTitle((_) => monthTitle);
    setAudioData((_) => audioData);
  }

  useEffect(() => {
    const convertYearToSeason = {
      fourteen: 'Temporada-1',
      fifteen: 'Temporada-2',
      sixteen: 'Temporada-3'
    }

    router.push(`#${convertYearToSeason[year]}#${monthTitle}`);
  }, [year, monthTitle]);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{title || "Tu Hora Divina"}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Escucha al pastor hablar sobre la vida, la biblia y Jesucristo." />
      </Head>
      <Header
        handleYear={handleYear}
      />
      <MainContent
        allMonths={allMonths}
        yearTitle={yearTitle}
        audioData={audioData}
        monthTitle={monthTitle}
        handleMonth={handleMonth}
        year={year}
        handleYear={handleYear}
      />
        {children}
       <Footer />
    </div>
  )
}

export default Layout
