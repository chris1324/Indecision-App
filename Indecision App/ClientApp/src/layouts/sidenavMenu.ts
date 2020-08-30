import PageNames from 'constant/pageNames';

export interface IGroupMenuItem {
    icon: string,
    label: string,
    items: IPageMenuItem[]
}

export interface IPageMenuItem {
    icon: string
    page: PageNames,
}

export type MenuItem = IGroupMenuItem | IPageMenuItem;

export const items: MenuItem[] = [
    {
        page: PageNames.Dashboard,
        icon: 'ion ion-md-speedometer'
    },
    {
        label: 'Demo',
        icon: 'ion ion-md-cube',
        items: [
            {
                page: PageNames.Indecision,
                icon: 'ion ion-ios-analytics'
            }
        ]
    }
];