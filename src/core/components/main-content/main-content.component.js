import React, { useState, useEffect } from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import styles from './mainContent.module.scss';

const MainContent = ({
	allMonths,
	yearTitle,
	audioData,
	monthTitle,
	handleMonth,
	year,
	handleYear,
}) => {
	const [activeMonthSixteen, setActiveMonthSixteen] = useState('enero');
	const [activeMonthFifteen, setActiveMonthFifteen] = useState('julio');
	const [activeMonthFourteen, setActiveMonthFourteen] = useState('enero');

	const firstHalf = allMonths.slice(0, 6);
	const secondHalf =
		year === 'sixteen' || year === 'fourteen' ? allMonths.slice(6) : null;
	let activeMonth;

	if (year === 'sixteen') {
		activeMonth = activeMonthSixteen;
	} else if (year === 'fifteen') {
		activeMonth = activeMonthFifteen;
	} else if (year === 'fourteen') {
		activeMonth = activeMonthFourteen;
	} else {
		activeMonth = '';
	}

	const handleActiveMonth = (month, currentYear) => {
		if (currentYear === 'sixteen') {
			setActiveMonthSixteen(month);
		} else if (currentYear === 'fifteen') {
			setActiveMonthFifteen(month);
		} else if (currentYear === 'fourteen') {
			setActiveMonthFourteen(month);
		}
	};

	useEffect(() => {
		handleActiveMonth();
	}, [activeMonthSixteen, activeMonthFifteen, activeMonthFourteen, year]);

	return (
		<section className={styles.mainWrapper}>
      <div className={styles.monthListWrapper}>
        {firstHalf.length && (
          <MonthList
            allMonths={firstHalf}
            yearTitle={yearTitle}
            handleMonth={handleMonth}
            year={year}
            handleActiveMonth={handleActiveMonth}
            activeMonth={activeMonth}
          />
        )}

        {secondHalf && (
          <MonthList
            allMonths={secondHalf}
            yearTitle={yearTitle}
            handleMonth={handleMonth}
            year={year}
            handleActiveMonth={handleActiveMonth}
            activeMonth={activeMonth}
          />
        )}
      </div>

      <div className={styles.playerListWrapper}>
        <PlayerList
          monthTitle={monthTitle}
          audioData={audioData}
        />
      </div>
		</section>
	);
};

export default MainContent;
