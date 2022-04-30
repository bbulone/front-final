import { Piano } from './piano';

export interface PianoFormData {
  isUpdateMode: boolean;
  pianoToUpdate?: Piano;
  idToCreate?: number;
}
