import React, { FC } from 'react';
import { $form, setField } from '../../store/forms';
import { useStoreMap } from 'effector-react';

type TFieldProps = {
  name: string,
  type: string,
  label?: string,
  placeholder?: string,
  accept?: string
}

export const Field: FC<TFieldProps> = ({ type, name, label, placeholder, accept }) => {

  const handleChange = setField.prepend((e: any) => ({
    key: e.target.name,
    value: e.target.value
  }));

  const value = useStoreMap({
    store: $form,
    keys: [name],
    // @ts-ignore
    fn: (values) => values[name] || ''
  });

  return (
    <input placeholder={placeholder} name={name} accept={accept} type={type} onChange={handleChange} value={value} />
  );
};

