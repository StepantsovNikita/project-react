import styles from './styled.module.css'
import {Link} from "react-router-dom"
const Header = () => {
    return <div className={styles.container}>
<nav className={styles.navbar}>
    <Link to="/">Главная страница</Link>
    <Link to="/chat">Чат</Link>
    <Link to="/test">Подгрузка данных</Link>
    <Link to="/cross-zero">Крестики-нолики</Link>
    
</nav>
</div>
    
}

export default Header