type BtnAddProps = React.PropsWithChildren<{
  className: string;
}>;

function BtnAdd( {children, className }: BtnAddProps) {
  return (
    <button type="button" className={className}>{children}</button>
  )
}

export default BtnAdd
