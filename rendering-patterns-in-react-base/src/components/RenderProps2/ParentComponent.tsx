import { useState } from "react";

interface ParentComponentProps {
  render: (data: string[]) => React.ReactNode;
}

const ParentComponent = ({ render }: ParentComponentProps): JSX.Element => {
  const [data] = useState<string[]>(["Apple", "Banana"]);

  return <ul>{render(data)}</ul>;
};

export default ParentComponent;
