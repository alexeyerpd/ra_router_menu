import {Menu} from 'components/Menu/Menu';
import {AppRoutes} from 'ui/routes/routes';
import {cn} from 'utils/classname';
import {createId} from 'utils/createId';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

const items = [
    {text: 'Главная', id: createId(), to: '/'},
    {text: 'Дрифт-такси', id: createId(), to: '/drift'},
    {text: 'Time Attack', id: createId(), to: '/timeattack'},
    {text: 'Forza Karting', id: createId(), to: '/forza'},
];

export function App() {
    return (
        <div className={block()}>
            <Menu items={items} />
            <AppRoutes />
        </div>
    );
}
