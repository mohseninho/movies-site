import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./footer.module.css"
import { faInstagram , faYoutube , faTelegram , faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <div className={style.wrapper}>
            <div className={style.actions}>
                <div className={style.menu}>
                    <ul>
                        <li>صحفه اصلی</li>
                        <li>هنرمندان</li>
                    </ul>
                </div>

                <div className={style.links}>
                    <p>follow us on</p>
                    <div className={style.icons}>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faTelegram}/>
                        <FontAwesomeIcon icon={faYoutube}/>
                    </div>
                </div>
            </div>

            <div className={style.copyright}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut commodi quibusdam, atque dolorum quaerat ab! Quas quis voluptates odio?</p>
            </div>
        </div>
    );
}

export default Footer;