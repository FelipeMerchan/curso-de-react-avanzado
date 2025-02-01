import { useState } from "react";

/* Las máquinas de estado son un módelo que nos permite
representar un sistema que tiene varios estados y cómo podemos
navegar entre estos estados en base a las acciones del usuario. */
interface StateMachineConfig<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
    };
  };
  views: {
    [key in StepNames]: React.ComponentType<{
      state: StateType;
      setState: React.Dispatch<React.SetStateAction<StateType>>;
    }>;
  };
}

type WizardState = {
  name: string;
  age: number;
};

type StepNames = "step1" | "step2" | "confirmation";

const stateMachineConfig: StateMachineConfig<WizardState, StepNames> = {
  initialStep: "step1",
  /* En este ejemplo, los steps son los lo que serían los states
  en el concepto de state machine */
  steps: {
    step1: {
      canAdvance: (state) => !!state.name,
    },
    step2: {
      canAdvance: (state) => !!state.age,
    },
    confirmation: {
      canAdvance: () => true,
    },
  },
  views: {
    step1: ({ state, setState }) => (
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(event) =>
            setState((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Full name"
        />
      </div>
    ),
    step2: ({ state, setState }) => (
      <div>
        <input
          type="number"
          value={state.age}
          onChange={(event) =>
            setState((prev) => ({ ...prev, age: parseInt(event.target.value) }))
          }
          placeholder="Age"
        />
      </div>
    ),
    confirmation: ({ state }) => (
      <div>
        <p>
          {state.name} is {state.age} years old.
        </p>
      </div>
    ),
  },
};

const getStepView = <T, V extends string>(
  config: StateMachineConfig<T, V>,
  stepName: V
): React.ComponentType<{
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}> => config.views[stepName];

function StateMachineWizard() {
  const [wizardState, setWizardState] = useState<WizardState>({
    name: "",
    age: 0,
  });
  const [currentStep, setCurrentStep] = useState<StepNames>(
    stateMachineConfig.initialStep
  );
  const StepComponent = getStepView(stateMachineConfig, currentStep);

  const handleNextStep = () => {
    const canAdvance =
      stateMachineConfig.steps[currentStep].canAdvance(wizardState);

    if (canAdvance) {
      if (currentStep === "step1") {
        setCurrentStep("step2");
      }
      if (currentStep === "step2") {
        setCurrentStep("confirmation");
      }
    } else {
      alert("You can't move forward yet");
    }
  };

  return (
    <section>
      <h1>State Machine Wizard</h1>
      <StepComponent state={wizardState} setState={setWizardState} />
      {currentStep !== "confirmation" && (
        <button onClick={handleNextStep}>Next</button>
      )}
    </section>
  );
}

export default StateMachineWizard;
