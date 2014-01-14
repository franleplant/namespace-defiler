/*
    *  Function name_spacer
    *  Creates the given name space
    *  and returns a reference to the deepest level object
    *  
    *  @ns_string = 'im.a.very.long.name.space'
    *  return window.im.a.very.long.name.space
    *  and space will be an object too. 
    *  space = {};
    */
    function name_spacer(ns_string) {

      var ns_array = ns_string.split('.'), 
        i, ns, next_lvl, max_length;

      //Initialize name space first's level.
      next_lvl = ns_array.shift();
      ns = window[next_lvl] = window[next_lvl] || {};

      max_length = ns_array.length;

      for (i = 0; i < max_length; i++) {

        next_lvl = ns_array.shift();
        ns = ns[next_lvl] = ns[next_lvl] || {};
      };

      return ns;
    };