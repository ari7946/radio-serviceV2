import React from 'react';
import styles from'./month.module.scss';

const Month = ({
	month,
	handleMonth,
	activeMonth,
	handleActiveMonth,
	year,
}) => {
	// disabled because there actually isn't data available and it created an error
	const shouldDisable = month === 'diciembre' && year === 'sixteen';
	const active = activeMonth === month;
	return (
		<button
			onClick={() => {
				handleMonth(month);
				handleActiveMonth(month, year);
			}}
			// className={`
      //   month-button
      //   ${active ? 'active-month' : ''}
      // `}
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
