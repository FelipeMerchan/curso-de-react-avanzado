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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
