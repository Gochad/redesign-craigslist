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

export interface User {
    name: string;
    email: string;
    location: string;
}
  
export interface Reply {
    id: number;
    author: string;
    title: string;
    content: string;
    replies: Reply[];
}
