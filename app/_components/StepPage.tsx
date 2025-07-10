"use client";

import { useState } from "react";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import StepProgress from "./step/StepProgress";
import Loading from "./step/Loading";

export default function StepPage() {
  const [step, setStep] = useState(0);

  const goBack = () => {
    if (step === -1) return;
    setStep(step - 1);
  };

  const goNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step > -1 && step < 4 && <StepProgress value={25 * step} />}
      {step === 0 && <Step1 goNext={goNext} />}
      {step === 1 && <Step2 goBack={goBack} goNext={goNext} />}
      {step === 2 && <Step3 goBack={goBack} goNext={goNext} />}
      {step === 3 && <Step4 goBack={goBack} goNext={goNext} />}
      {step === 4 && <Loading goNext={goNext} />}
    </div>
  );
}
