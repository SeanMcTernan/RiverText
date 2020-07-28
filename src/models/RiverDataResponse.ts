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

