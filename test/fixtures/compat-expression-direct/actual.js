import lodash from 'lodash-compat';

const method1 = lodash.identity || lodash.noop;
const method2 = lodash.noop ? lodash.map : lodash.filter;

(something ? lodash.pick : lodash.omit)(obj, function() {

});