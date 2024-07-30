export interface FilterPaginate {
    page: number;
    size: number;
    sortOrder?: string;
    sortField: string;
    searchValue?: string;
}