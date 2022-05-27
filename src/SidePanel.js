import style from "./SidePanel.css";
import avatar from "./images/avatar.png";
import arrow from "./images/arrow.svg";

function sidePanel(props) {
    return (
        <aside className="sidePanel">
            <div className="avatar">
                <img src={avatar}></img>
                <h1>Hi, Yura</h1>
            </div>
            <div className="sidePanelLinks">
                <a>Home</a>
                <a>Tasks</a>
                <a>Settings</a>
            </div>
            <div className="closeSidePanelButton" onClick={props.onClosePanel}>
                <img src={arrow}></img>
            </div>
        </aside>
    );
}

export default sidePanel;
