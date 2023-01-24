import React, { useState, useEffect } from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import styles from './mainContent.module.scss';
import { AudioData } from 'src/core/types/types';

interface MainContentProps {
  allMonths: string[];
  yearTitle: string;
  audioData: AudioData[];
  monthTitle: string;
  handleMonth: (month: string) => unknown;
  year: string
}

const MainContent = ({
	allMonths,
	audioData,
	monthTitle,
	handleMonth,
	year,
} : MainContentProps) => {
	const [activeMonthSixteen, setActiveMonthSixteen] = useState<string | undefined>('enero');
	const [activeMonthFifteen, setActiveMonthFifteen] = useState<string | undefined>('julio');
	const [activeMonthFourteen, setActiveMonthFourteen] = useState<string | undefined>('enero');

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

	const handleActiveMonth = (month?: string, currentYear?: string) => {
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
            handleMonth={handleMonth}
            year={year}
            handleActiveMonth={handleActiveMonth}
            activeMonth={activeMonth}
          />
        )}

        {secondHalf && (
          <MonthList
            allMonths={secondHalf}
            handleMonth={handleMonth}
            year={year}
            handleActiveMonth={handleActiveMonth}
            activeMonth={activeMonth}
          />
        )}
      </div>

      <div className={styles.playerListWrapper}>
        <PlayerList
          audioData={audioData}
        />
      </div>
		</section>
	);
};

export default MainContent;
