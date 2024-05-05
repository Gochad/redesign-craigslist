
interface CategoryData {
    name: string;
    subcategories: string[];
}
  

interface Location {
    id: string;
    name: string;
    children?: Location[];
}