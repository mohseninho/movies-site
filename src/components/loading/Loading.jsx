import style from "./loading.module.css"
function Loading() {
    return (
        <div className={style.wrapper}>
            <div className={style.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;
