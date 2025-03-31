import { ErrorDTO } from "./error-dto";

export interface PcOutputResponse<T> {
    status: string;
    response: T;
    error: ErrorDTO[];
}