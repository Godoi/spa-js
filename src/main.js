import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './assets/css/style.css';

import toastr from '../node_modules/toastr/build/toastr.min.js';
import './core/validate/index.js';
import {nav} from "./router";

nav(window.location.pathname);

toastr.options = {
  "timeOut": "0",
  "closeButton": true,
  "preventDuplicates": true,
  "positionClass": "toast-top-center",
}
global.toastr = toastr;

