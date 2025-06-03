import Application from "../components/dino game/Application";
import SlowSpeedOption from "../components/dino-game/SlowSpeedOption";

export default function ErrorPage() {

    return (
        <>

            <div id="content">
                <div id="main-frame-error" className="interstitial-wrapper">
                    <div id="main-content"></div>
                    <div id="buttons" className="nav-wrapper suggested-right">
                        <div id="control-buttons" hidden></div>
                    </div>
                    <div id="details"></div>
                    
                    <Application/>
                    <SlowSpeedOption/>
                </div>
                
                
                <div id="sub-frame-error">
                    <img className="icon" src="" alt=""/>
                    <p id="sub-frame-error-details">No Internet</p>
                </div>
            </div>
            <div id="offline-resources">
                <img id="offline-resources-1x" src="" />
                <img id="offline-resources-2x" src="" />
                <template id="audio-resources">
                    <audio id="offline-ound-press" src=""></audio>
                    <audio id="offline-ound-hit" src=""></audio>
                    <audio id="offline-ound-reached" src=""></audio>
                </template>
            </div>
        </>
    )
}