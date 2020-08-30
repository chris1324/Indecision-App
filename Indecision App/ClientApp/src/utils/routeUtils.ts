// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history';
import * as Route from './route';
import PageNames from 'constant/pageNames';

export function getPageRoute(pageName: PageNames): Route.IPageRoute {
    return Route.pageRoutes.find(x => x.name === pageName) as Route.IPageRoute;
}

export function getPagePath(pageName: PageNames): string {
    return getPageRoute(pageName).path;
}

export function getPageText(pageName: PageNames): string {
    return getPageRoute(pageName).text;
}

export function navigateToPage(history: H.History, pageName: PageNames): void {
    const path = getPagePath(pageName);
    history.push(path);
}