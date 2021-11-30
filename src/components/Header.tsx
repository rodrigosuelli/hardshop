import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.headerContainer}>
        <h2>Estoque</h2>
        <div className={styles.profileContainer}>
          <div className={styles.profilePic}>R</div>
          <div className={styles.profileInfoContainer}>
            <p className={styles.profileName}>Rodrigo Henrique Suélli</p>
            <p className={styles.profileEmail}>
              rodrigo.suelli@fatec.sp.gov.br
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
