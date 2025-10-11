export interface CloudSpendResponse {
    ok: boolean;
    data: CloudSpend[];
    message?: string;
    error?: any;
}


export interface CloudSpend {
    vertical: string;
    area: string;
    initiative: string;
    service: string;
    date: string;
    spend: number;
}
