import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Your Website</h1>
        <p className={styles.subtitle}>Create something amazing with Next.js and SCSS</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero; 