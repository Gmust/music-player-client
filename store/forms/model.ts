import { createDomain, sample } from 'effector';
import { IForm } from '../../models/forms';


const forms = createDomain();


export const setField = forms.createEvent<IForm>();
export const submitted = forms.createEvent();


const sendFormFx = forms.createEffect((params: any) => {
  console.log(params);
});


export const $form = forms.createStore({})
  .on(setField, (state, { key, value }: IForm) => ({
    ...state,
    [key]: value
  }));

sample({
  clock: submitted,
  source: $form,
  target: sendFormFx
});


