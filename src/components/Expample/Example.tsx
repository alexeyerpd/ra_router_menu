import {cn} from 'utils/classname';

import './Example.scss';

const block = cn('example');

interface ExampleProps {
    text: string;
}

export function Example(props: ExampleProps) {
    console.log(props);
    return <div className={block()}>{props.text}</div>;
}
