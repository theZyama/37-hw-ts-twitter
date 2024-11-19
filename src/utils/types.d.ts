export interface InfoTwitterContext {
    user: {
        name: string;
        avatar: string;
    };
    stats: {
        followers: number;
        following: number;
    };
}
