export interface FiltersOptionsData {
    verticals: string[];
    areas: string[];
    initiatives: string[];
    services: string[];
}

export interface FiltersState {
    type: 'Histórico' | 'Proyección' | 'Histórico y Proyección';
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