import { Document } from 'mongoose';
export interface Phone extends Document {
    readonly name: string;
    readonly phone: string;
    readonly address: string;
}
