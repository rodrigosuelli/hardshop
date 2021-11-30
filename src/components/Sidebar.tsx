import ActiveLink from './ActiveLink';
import { MdOutlineInventory2, MdOutlineInventory } from 'react-icons/md';

import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Hardshop</h2>
      </div>
      <ActiveLink activeClassName={styles.active} href="/estoque">
        <a className={styles.pageLink}>
          <MdOutlineInventory2 size={48} className={styles.inventoryIcon} />
          <p className={styles.linkTitle}>Estoque</p>
        </a>
      </ActiveLink>
      <ActiveLink activeClassName={styles.active} href="/vendas">
        <a className={styles.pageLink}>
          <MdOutlineInventory size={48} className={styles.salesIcon} />
          <p className={styles.linkTitle}>Vendas</p>
        </a>
      </ActiveLink>
    </aside>
  );
}

export default Sidebar;
