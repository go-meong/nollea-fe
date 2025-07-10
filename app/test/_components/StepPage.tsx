"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Step1 from "../test/_components/step/Step1";
import Step2 from "../test/_components/step/Step2";
import Step3 from "../test/_components/step/Step3";
import Step4 from "../test/_components/step/Step4";
import StepProgress from "../test/_components/step/StepProgress";

export default function StepPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goBack = () => {
    if (step === -1) return;
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const goNext = () => {
    setDirection(1);
    setStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 key="step1" goNext={goNext} />;
      case 1:
        return <Step2 key="step2" goBack={goBack} goNext={goNext} />;
      case 2:
        return <Step3 key="step3" goBack={goBack} goNext={goNext} />;
      case 3:
        return <Step4 key="step4" goBack={goBack} />;
      default:
        return null;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="flex-1 flex flex-col">
      {step > -1 && step < 4 && <StepProgress value={25 * step} />}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.3,
          }}
          className="inset-0 w-full h-full overflow-hidden"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
