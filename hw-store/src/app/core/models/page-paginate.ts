export interface PagePaginate {
    content: Array<any>;    // Contenido, lista de registros
    pageable: Pageable; 
    last: boolean;  // si la pagina es la ultima
    totalElements: number;  // Total de elementos, total de tode registros de la tabla
    totalPages: number; // Total de paginas
    size: number;   // Tamanio por paigna
    number: number; // Numero de pagina
    sort:SortPaginate;
    first: boolean; // si la pagina es la primera
    numberOfElements: number;   // numero de elementos de la pagina
    empty: boolean; // si esta vacia, no existen paginas
}


export interface Pageable {
    pageNumber: number; // Numero de pagina actual
    pageSize: number;   // numero de registros por pagina
    sort: SortPaginate; 
    offset: number; // Numero de elemento donde empieza la pagina actual, pagina 0 offset=0, 
    paged: boolean; // paginado
    unpaged: boolean;   // no paginado
}

export interface SortPaginate {
    empty: boolean; // si no tiene orden
    sorted: boolean; // ASC
    unsorted: boolean;  // DESC
}