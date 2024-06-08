// src/user/interfaces/user.interface.ts
import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
}
