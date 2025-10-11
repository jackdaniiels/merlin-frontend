
export interface CloudSpendProjectionResponse {
    ok: boolean;
    data: CloudSpendProjection[];
    message?: string;
    error?: any;
}

export interface CloudSpendProjection {
    id: number;
    vertical: string;
    area: string;
    initiative: string;
    service: string;
    date: Date;
    proyected_spend: string;
    max_spend: string;
    min_spend: string;
}
