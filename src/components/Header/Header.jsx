import style from "./header.module.css"
import logo from "../../img/logo192.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <img className={style.logo} src={logo} alt="logo" />
                <ul>
                    <ul>دسته بندی ها</ul>
                    <ul>هنرمندان</ul>
                    <ul>پخش آنلاین</ul>
                    <ul>خرید اشتراک</ul>
                </ul>
            </div>
            <div className={style.actions}>
                <button className={style.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <button className={style.loginBtn}>ورود / عضویت</button>
            </div>
        </div>
    );
}

export default Header;