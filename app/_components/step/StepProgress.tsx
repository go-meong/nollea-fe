interface IStepProgress {
  value: number;
}

export default function StepProgress({ value }: IStepProgress) {
  return (
    <div className="w-full h-2 bg-[#3B3B3B] rounded-full mt-26 mb-10">
      <div className={`h-full bg-[#ff6500] rounded-full transition-[width] duration-200 ease-in-out`} style={{ width: `${value}%` }} />
    </div>
  );
}
