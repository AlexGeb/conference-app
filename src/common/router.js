export class Router {
  constructor(templator, idView) {
    this.view = idView;
    this.templator = templator;
    this.routes = {};
    this.el = null;
  }
  /** route registering function */
  route(path, controller) {
    this.routes[path] = { controller };
  }

  router() {
    // Lazy load view element:
    this.el = this.el || document.getElementById(this.view);
    // Current route url (getting rid of '#' in hash as well):
    let url = location.hash.slice(1) || '/';
    const param = url.split('/')[1];
    if (param) {
      console.log('param in url : ', param);
      url = url.split('/')[0] + '/:id';
    }
    // Get route by url:
    const route = this.routes[url];
    // Do we have both a view and a route?
    if (this.el && route && route.controller) {
      // render the template
      // Render route template with John Resig's template engine:
      const self = this;
      this.templator(route.controller).then(view => {
        self.el.innerHTML = view;
        if (route.controller.postRender) {
          route.controller.postRender();
        }
      });
    }
  }
}
