import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
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