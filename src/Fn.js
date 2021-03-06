/*jslint evil: true, browser: true, immed: true, passfail: true, undef: true, newcap: true*/
/*global easyXDM, window, escape, unescape, debug */


(function(){
    // The map containing the stored functions
    var _map = {};
    
    /**
     * @class easyXDM.Fn
     * This contains methods related to function handling, such as storing callbacks.
     * @singleton
     * @namespace easyXDM
     */
    easyXDM.Fn = {
        /**
         * Stores a function using the given name for reference
         * @param {String} name The name that the function should be referred by
         * @param {Function} fn The function to store
         * @namespace easyXDM.fn
         */
        set: function(name, fn){
            // #ifdef debug
            this._trace("storing function " + name);
            // #endif
            _map[name] = fn;
        },
        /**
         * Retrieves the function referred to by the given name
         * @param {String} name The name of the function to retrieve
         * @param {Boolean} del If the function should be deleted after retrieval
         * @return {Function} The stored function
         * @namespace easyXDM.fn
         */
        get: function(name, del){
            // #ifdef debug
            this._trace("retrieving function " + name);
            // #endif
            var fn = _map[name];
            // #ifdef debug
            if (!fn) {
                this._trace(name + " not found");
            }
            // #endif
            
            if (del) {
                delete _map[name];
            }
            return fn;
        }
    };
    
    // #ifdef debug
    easyXDM.Fn._trace = debug.getTracer("easyXDM.Fn");
    // #endif
}());
