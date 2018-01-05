export class Router {
  constructor() {
    this.routes = {};
    this.el = null;
    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
  }

  route(path, templateId, controller) {
    this.routes[path] = { templateId, controller };
  }

  router() {
    // Lazy load view element:
    el = el || document.getElementById('view');
    // Current route url (getting rid of '#' in hash as well):
    const url = location.hash.slice(1) || '/';
    // Get route by url:
    const route = this.routes[url];
    // Do we have both a view and a route?
    if (el && route.controller) {
      // TODO : render the template
      // Render route template with John Resig's template engine:
      // el.innerHTML = tmpl(route.templateId, new route.controller());
    }
  }
}
