import React from 'react';
// eslint-disable-next-line sort-imports
import Dashboard from 'scenes/Dashboard';
import Indecision from 'scenes/Indecision';
import MasterMenu from 'layouts/LayoutMasterMenu';
import PageNames from 'constant/pageNames';

export interface IPageRoute {
    name: PageNames,
    path: string,
    component: React.ComponentClass | React.FC,
    text: string
}

export const pageRoutes: IPageRoute[] = [
    {
        name: PageNames.Indecision,
        path: '/indecision',
        component: Indecision,
        text: 'Indecision'
    },
    {
        name: PageNames.Dashboard,
        path: '/',
        component: Dashboard,
        text: 'Dashboard'
    },
    {
        name: PageNames.MasterMenu,
        path: '/masterdata',
        component: MasterMenu,
        text: 'Master Data Menu'
    }
];