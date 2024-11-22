import React from "react";

interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface DataPresenterProps {
  data: DataItem[];
}

export const DataPresenter = ({ data }: DataPresenterProps): JSX.Element => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <img src={item.image} alt={item.name} width="300" height="300" />
          <em>{item.description}</em>
        </React.Fragment>
      ))}
    </>
  );
};
