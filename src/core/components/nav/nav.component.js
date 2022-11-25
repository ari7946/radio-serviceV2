import React, { useState, useEffect, useCallback } from 'react';
import styles from './nav.module.scss';

const useIsDesktop = () => {
	const [isDesktop, setDesktop] = useState(true);

	const updateMedia = useCallback(() => {
		setDesktop(window.innerWidth > 845);
	}, [setDesktop]);

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		updateMedia();
		return () => window.removeEventListener('resize', updateMedia);
	});

	return isDesktop;
};

const NavBar = ({ handleYear }) => {
	const [active, setActive] = useState('sixteen');
	const isDesktop = useIsDesktop();

	return (
		<nav className={styles.mainMenu}>
			<ul>
				<li
					onClick={() => {
						handleYear('sixteen');
						setActive('sixteen');
					}}
					className={`
            ${active === 'sixteen' ? styles.activeItem : ''}
          `}
				>
					{isDesktop ? (
						<a href='#temporada1'>Temporada 1</a>
					) : (
						<a href='#temporada1'>Temp 1</a>
					)}
				</li>

				<li
					onClick={() => {
						handleYear('fifteen');
						setActive('fifteen');
					}}
					className={`
            ${active === 'fifteen' ? styles.activeItem : ''}
          `}
				>
					{isDesktop ? (
						<a href='#temporada2'>Temporada 2</a>
					) : (
						<a href='#temporada2'>Temp 2</a>
					)}
				</li>

				<li
					onClick={() => {
						handleYear('fourteen');
						setActive('fourteen');
					}}
					className={`
            ${active === 'fourteen' ? styles.activeItem : ''}
          `}
				>
					{isDesktop ? (
						<a href='#temporada3'>Temporada 3</a>
					) : (
						<a href='#temporada3'>Temp 3</a>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
