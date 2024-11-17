import { useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  return {
    isLoading,
    setIsLoading,
  };
}

interface UserComponentProps {
  name: string;
}

const UserComponent = ({ name }: UserComponentProps): JSX.Element => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="Felipe" />;
};
