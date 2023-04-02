import clsx from 'clsx';

import s from './Button.module.css';

type IProps = {
  label: string;
  onClick?: () => void;
  type: 'normal' | 'filter';
  highlighted: boolean;
}

export const Button = ({
  label, onClick, type, highlighted,
}: IProps) => (
  <div>
    {type === 'normal' ? (
      <button type="button" onClick={onClick} className={s.buttonNormal}>
        {label}
      </button>
    ) : (
      <button type="button" onClick={onClick} className={clsx(s.buttonFilter, highlighted ? s.title : {})}>
        {label}
      </button>
    )}
  </div>
);
