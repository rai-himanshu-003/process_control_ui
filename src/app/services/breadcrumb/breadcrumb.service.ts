import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, filter, map} from 'rxjs';
import {IBreadCrumb} from 'src/app/models/breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<IBreadCrumb[]>([]);
  breadcrumbs$ = this.breadcrumbSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.router.routerState.snapshot.root))
      )
      .subscribe(breadcrumbs => {
        this.setBreadcrumbs(breadcrumbs);
      });
  }

  setBreadcrumbs(breadcrumbs: IBreadCrumb[]): void {
    this.breadcrumbSubject.next(breadcrumbs);
  }

  buildBreadcrumbs(route: ActivatedRouteSnapshot, url = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    const routeURL: string = route.url.map(segment => segment.path).join('/');
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const label = route.data['breadcrumb'];
    if (label) {
      breadcrumbs.push({label, url});
    }

    if (route.children.length > 0) {
      return this.buildBreadcrumbs(route.children[0], url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
