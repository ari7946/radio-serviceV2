import React from 'react';
import Month from '../month/month.component';
import styles from './month-list.module.scss';

const MonthList = ({
	allMonths,
	handleMonth,
	year,
	handleActiveMonth,
	activeMonth,
}) => {
	return (
		<aside className={styles.monthsWrapper}>
			{allMonths.map((month) => (
				<Month
					month={month}
					handleMonth={handleMonth}
					year={year}
					handleActiveMonth={handleActiveMonth}
					activeMonth={activeMonth}
					key={`${month}/${year}`}
				/>
			))}
		</aside>
	);
};

export default MonthList;
