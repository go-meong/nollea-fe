"use client";

import { useState } from "react";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import StepProgress from "./step/StepProgress";

export default function StepPage() {
  const [step, setStep] = useState(1);

  const goBack = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const goNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <StepProgress value={25 * step} />
      {step === 1 && <Step1 goNext={goNext} />}
      {step === 2 && <Step2 goBack={goBack} goNext={goNext} />}
      {step === 3 && <Step3 goBack={goBack} goNext={goNext} />}
      {step === 4 && <Step4 goBack={goBack} goNext={goNext} />}
    </div>
  );
}
