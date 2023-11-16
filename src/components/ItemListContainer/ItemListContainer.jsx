import styles from "./Item.module.css";

export const ItemListContainer = ({ greeting }) => {
return (
    <div className={styles.color} > { greeting } </div>
)
}