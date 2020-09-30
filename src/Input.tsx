import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
// onChange: () => void 쓰면, onChange는 함수이고, 아무것도 return하지 않는다란 의미.
// event를 저리 써줘야 App의 21번줄 오류 발생 안함.
// input이 아니라 select 이면 selectInputElement로 작성

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}> {children}</form>;
