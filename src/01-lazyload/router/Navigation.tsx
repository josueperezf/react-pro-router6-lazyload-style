import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import { LazyRouter } from './LazyRouter';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const Navigation = () => {
    
    const element = useRoutes(LazyRouter);
    return (
        <>
            <h2>enlaces a paginas hijas de LazyLayout</h2>
            <ul>
                <li>
                    <Link to={`lazy1`}> Lazy Page 1</Link>
                </li>
                <li>
                    <Link to={`lazy2`}> Lazy Page 2</Link>
                </li>
                <li>
                    <Link to={`lazy3`}> Lazy Page 3</Link>
                </li>
            </ul>
            {/* aqui se dibujara cada subruta */}
            {element}
            {/* <Routes>
                <Route path={`lazy1`} Component={LazyPage1} />
                <Route path={`lazy2`} Component={LazyPage2} />
                <Route path={`lazy3`} Component={LazyPage3} />
            </Routes> */}
        </>
    )
}
