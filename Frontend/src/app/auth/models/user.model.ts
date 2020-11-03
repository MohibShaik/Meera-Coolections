import {
  required,
  compare,
  alpha,
  minLength,
} from '@rxweb/reactive-form-validators';
export class User {
  id: number;
  name: string;
  @required({ message: 'Email is required' })
  email: string;

  @required({ message: 'Password is required' })
  password: string;
}
