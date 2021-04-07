

import styles from './styles.module.scss';

export function SubscribeButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button 
      type="button"
      className={styles.subscribeButton}
    >
      
      Danilo Eduardo
    </button>
  ) : (
    <button 
      type="button"
      className={styles.subscribeButton}
    >
     Subscribe now
    </button>
  );
}