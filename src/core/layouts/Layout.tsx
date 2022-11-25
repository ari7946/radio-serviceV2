import Head from "next/head"
import React, { useState } from "react"
import { BlitzLayout } from "@blitzjs/next"
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import MainContent from '../components/main-content/main-content.component';
import styles from './layout.module.scss';
import {getData, useData} from '../components/data/data';

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  const data = getData('spanish');
  
  const initialAudioData = data.sixteen.monthsData.enero.audioData;
  const initialAllMonths = data.sixteen.allMonths;
  const initialYearTitle = data.sixteen.yearTitle;
  const initialMonthTitle = data.sixteen.monthsData.enero.monthTitle;
  const initialYear = data.sixteen.year;

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

  const handleYear = (yearSelected) => {
    const { yearTitle, year, allMonths, monthsData } = data[yearSelected];

    // 2016 and 2016 both begin in Janurary, while 2015 begins in July. 
    // (according to the data available, obviously not on an actual calendar) 
    const { monthTitle, audioData } = 
      yearSelected === 'fifteen' ? monthsData.julio : monthsData.enero;

    setAllMonths(allMonths);
    setYearTitle(yearTitle);
    setYear(year);
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{title || "Tu Hora Divina"}</title>
        <link rel="icon" href="/favicon.ico" />
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
