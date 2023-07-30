import {NavLink, useLocation} from 'react-router-dom';
import {cn} from 'utils/classname';

import './Menu.scss';

const block = cn('menu');

interface MenuProps {
    items: {to: string; id: string; text: string}[];
}

export function Menu(props: MenuProps) {
    const data = useLocation();
    console.log(data);
    return (
        <nav className={block()}>
            {props.items.map((item) => (
                <NavLink
                    key={item.id}
                    className={({isActive}) => block('item', {active: isActive})}
                    to={item.to}
                >
                    {item.text}
                </NavLink>
            ))}
        </nav>
    );
}
