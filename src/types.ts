export type Post = {
    content: string;
    id: string;
    image?: string;
    likes: number;
    author: User;
};

export type User = {
    id: string;
    name: string;
    position: string;
    image?: string;
    backImage?: string;
    about?: string;
}