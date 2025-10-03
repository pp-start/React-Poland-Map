import Gear from './svg/Gear';

export default function Loading(): React.JSX.Element {

    return (
        <div id="app-outer-container">
            <div id="app-inner-container">
                <div className="waiting-wrapper">
                    <p className="waiting-message">Proszę czekać trwa pobieranie aktualizacji</p>
                    <Gear/>
                </div>
            </div>
        </div>
    );

};