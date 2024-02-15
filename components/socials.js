import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from './layout.module.css'

export default function Socials(){

	return (
	<div align="center">
      <section className={utilStyles.headingLg}> Socials </section>
			<Link href="https://github.com/connors128">
				<p className={styles.imagespacing}>
					<Image
						priority
						src="/images/GitHub-Mark.png"
						className={utilStyles.borderCircle}
						height={50}
						width={50}
						alt="GitHub"
					/>
        		</p>
      		</Link>
			<Link href="https://www.linkedin.com/in/connor-scott-79b531189/">
				<p className={styles.imagespacing}>
	        		<Image
						priority
						src="/images/LI-logo.png"
						className={utilStyles.borderCircle}
						height={50}
						width={50}
						alt="LinkedIn"
					/>
        		</p>
      		</Link>
    </div>
    );
}
