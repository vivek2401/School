class NavbarnewController {
  /* @ngInject */
  constructor(sidenav) {
    this.name = 'navbar';
    this.components = {
     sidenav: sidenav
    }
  }
  toggle($mdSidenav) {
    this.components.sidenav.toggle();
  }
}

export default NavbarnewController;
