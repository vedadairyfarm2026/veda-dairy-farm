import styles from "./content.module.css";

export function FaqList({ items, name }: { items: readonly { question: string; answer: string }[]; name: string }) {
  return <div className={styles.faqList}>
    {items.map(item => <details className={styles.faqItem} name={name} key={item.question}>
      <summary>{item.question}<span aria-hidden="true">+</span></summary>
      <p>{item.answer}</p>
    </details>)}
  </div>;
}
