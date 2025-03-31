export interface ProcessQueueStatus {   
    pin: string;
    ruleId: number;
    documentId: string;
    depDocumentId: string;
    status: string;
    statusTimestamp: string;
    message: string;
    values: string;
    action: string;
    isEdit: boolean;
    uid: number;
}