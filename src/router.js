import templateRegistration from './modules/register/register.component';
import templateList from './modules/list/list.component';
import startValidate from './core/validate/index';

const routes = {
  "/": templateRegistration,
  "/register": templateRegistration,
  "/list": templateList
}

const rootDiv = document.querySelector('[data-container]');

const  nav = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = "";
  const location = window.location.pathname;
  const startRoutes = routes[location];
  rootDiv.appendChild(startRoutes());
  if(location != '/list'){
    startValidate();
  }
}

window.nav = nav;
window.onpopstate = () =>{ 
  rootDiv.innerHTML = "";
  const startRoutes = routes[window.location.pathname];
  rootDiv.appendChild(startRoutes());
}

export {nav};