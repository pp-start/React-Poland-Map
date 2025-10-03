import { Link } from 'react-router-dom';
import ErrorIcon from '../images/error.png';

export default function Error(): React.JSX.Element {

    return (
        <div id="error-outer-container">
            <Link to="/">
                <div id="error-inner-container">
                    <p className="text-error">Przepraszamy, coś poszło <br></br>nie tak po naszej stronie.</p>
                    <img
                        src={ErrorIcon}
                        alt='error'
                        className="error-image"
                    />
                    <p className="text-error">Kliknij aby powrócić.</p>
                </div>
            </Link>
        </div>
    )
}