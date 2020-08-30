import React from 'react';
import styles from '../scss/NotFound.module.scss';

const Page: React.FC = () => (
	<div className={styles.Container}>
		<div className="text-center">
			<h1 className={styles.Status}>404</h1>
			<h2 className={styles.Message}>Not Found</h2>
		</div>
	</div>
);

export default Page;
