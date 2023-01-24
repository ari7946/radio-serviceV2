import React from 'react';
import styles from './month.module.scss';

interface MonthProps {
  month: string;
  handleMonth: (month: string) => unknown;
  activeMonth: string;
  handleActiveMonth: (month: string, year: string) => unknown;
  year: string;
}

const Month = ({
	month,
	handleMonth,
	activeMonth,
  handleActiveMonth,
	year,
}: MonthProps) => {
	// disabled because there actually isn't data available and it created an error
	const shouldDisable = month === 'diciembre' && year === 'sixteen';
	const active = activeMonth === month;
	return (
		<button
			onClick={() => {
				handleMonth(month);
				handleActiveMonth(month, year);
			}}
			className={`
        ${styles.monthButton} ${active ? styles.activeMonth : ''}
      `}
			disabled={shouldDisable}
		>
			{month}
		</button>
	);
};

export default Month;
