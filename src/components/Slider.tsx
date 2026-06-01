type SliderProps = {
  id: string;
  className?: string;
  min: string;
  max: string;
  value: number;
  onChange: (value: number) => void;
};

function Slider({
  id,
  className = "",
  min,
  max,
  value,
  onChange,
}: SliderProps) {
  return (
    <>
      <input
        id={id}
        className={className}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </>
  );
}

export default Slider;
