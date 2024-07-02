
export interface SectionMenu {
    id: number;
    section: string;
    subSections: Array<SubSectionMenu>;

}

export interface SubSectionMenu {
    id: number;
    name: string;
    credentials: Array<any>;
    links: Array<LinkMenu>;
    show: boolean;
    icon?: any;
}

export interface LinkMenu {
    id: number;
    link: string;
    name: string;
    selected: boolean;
}