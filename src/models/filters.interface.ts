export interface FiltersOptionsData {
    verticals: string[];
    areas: string[];
    initiatives: string[];
    services: string[];
}

export type HistoricType = 'Histórico' | 'Proyección' | 'Histórico y Proyección';

export interface FiltersState {
    type: HistoricType;
    vertical: string;
    area: string;
    initiative: string;
    service: string;
    options: {
        type: string[];
        verticals: string[];
        areas: string[];
        initiatives: string[];
        services: string[];
    };
    loading: boolean;
    error: string | null;
}