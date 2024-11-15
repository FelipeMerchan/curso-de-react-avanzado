import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

export const RenderProps2 = () => {
  return (
    <div>
      <ParentComponent
        render={(data: string[]) => <ChildComponent data={data} />}
      />
    </div>
  );
};
