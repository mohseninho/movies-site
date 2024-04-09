import style from "./header.module.css"
import logo from "../../img/logo192.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className={style.container}>
            <div className={style.menu}>
                <Link to="/">
                    <img className={style.logo} src={logo} alt="logo" />            
                </Link>
                <ul>
                    <Link to="/categories">
                        <li>دسته بندی ها</li>
                    </Link>
                    <Link to="/artisits">
                        <li>هنرمندان</li>
                    </Link>
                    <Link to="/online-play">
                        <li>پخش آنلاین</li>
                    </Link>
                    <Link to="/subscribe">
                        <li>خرید اشتراک</li>
                    </Link>
                </ul>
            </div>
            <div className={style.actions}>
                <button className={style.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <Link to="/login">
                    <button className={style.loginBtn}>ورود / عضویت</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;