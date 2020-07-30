export type RiverDataResponse = {
    code: string;
    url: string;
    message: {
        startDate: string;
        endDate: string;
        unit: string;
        history: { date: string; value: string }[]
    };
}

export type History = {
    value: string;
    date: string;
}

