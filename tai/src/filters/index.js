import Vue from 'vue';
import date from './data.js';

Vue.filter('date',date);

import fillzero from './fillzero.js' 

Vue.filter('fillzero',fillzero)