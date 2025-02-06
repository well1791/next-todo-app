import style from "./BtnAdd.module.css";

type BtnAddProps = React.PropsWithChildren<{
  className?: string;
}>;

function BtnAdd({ children, className }: BtnAddProps) {
  return (
    <button type="button" className={`${style.container} ${className}`}>
      {children}
    </button>
  )
}

export default BtnAdd
