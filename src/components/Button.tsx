type ButtonProps = {
  id: string;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ id, className = "", onClick, children }: ButtonProps) {
  return (
    <>
      <button id={id} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
