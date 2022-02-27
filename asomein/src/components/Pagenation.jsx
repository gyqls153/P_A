
import { Link } from 'react-router-dom';

function Pagenation (){
    return(
        <div className="pagination">
            <div className="pager-inner">
                <div className="move-before">
                    <Link to="/" className="first"></Link>
                    <Link to="/" className="before"></Link>
                </div>
                <ul className="number-pages">
                    <li className="num">1</li>
                    <li className="num">2</li>
                    <li className="num">3</li>
                    <li className="num">4</li>
                    <li className="num">5</li>
                    <li className="num">6</li>
                    <li className="num">7</li>
                </ul>
                <div className="move-after">
                    <Link to="/" className="next"></Link>
                    <Link to="/" className="end"></Link>
                </div>
            </div>
        </div>
    )
}
export default Pagenation;