import s from './Container.module.css';

type Props = {
  children?: React.ReactNode;
}

const Container = ({ children }: Props) => <div className={s.container}>{children}</div>;

export default Container;
