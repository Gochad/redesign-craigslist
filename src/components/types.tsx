interface CategoryData {
    name: string;
    subcategories: string[];
}

interface Location {
    id: string;
    name: string;
    children?: Location[];
}

interface LinkData {
    to: string;
    label: string;
}
  
interface Item {
    date: string;
    title: string;
    category: string;
    area: string;
    price: string;
    description: string;
}

export {};
