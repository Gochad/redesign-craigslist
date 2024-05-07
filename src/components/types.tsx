export interface CategoryData {
    name: string;
    subcategories: string[];
}

export interface Location {
    id: string;
    name: string;
    children?: Location[];
}

export interface LinkData {
    to: string;
    label: string;
}
  
export interface Item {
    date: string;
    title: string;
    category: string;
    area: string;
    price: string;
    description: string;
}

export interface Reply {
    id: number;
    author: string;
    content: string;
    replies: Reply[];
}
