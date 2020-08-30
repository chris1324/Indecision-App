import PageNames from 'constant/pageNames';

export interface IMenuItem {
    label: string,
    items: PageNames[]
}

export const items: IMenuItem[] = [
    {
        label: 'Demo 1',
        items: [PageNames.Dashboard]
    }
];