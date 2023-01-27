import { createForm } from 'effector-forms/scope';
import { ITrack } from '../../models/tracks';
import { forward } from 'effector';
import { $trackData } from '../stepper';


export const trackDataForm = createForm<Pick<ITrack, 'name' | 'artist' | 'text'>>({
  fields: {
    name: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => Boolean(value)
        }
      ]
    },
    text: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => Boolean(value)
        }
      ]
    },
    artist: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value: string) => Boolean(value)
        }
      ]
    }
  },
  validateOn: ['change']
});


forward({
  from: trackDataForm.formValidated,
  to: $trackData
});