!function(){"use strict";angular.module("boozio",["ngAnimate","ngCookies","ngSanitize","ngMaterial"])}(),function(){"use strict";function o(o,n,t){o.cocktails=[{name:"Vodka Martini",code:1,image:"APP-02.png"},{name:"Vodka Lemon Syrup",code:2,image:"APP-03.png"},{name:"Martini Lemon Syrup",code:3,image:"APP-04.png"},{name:"Vodka Syrup",code:4,image:"APP-05.png"}],o.pour=function(o){o.isActive=!0,n.get("/booze?drink="+o.code).then(function(){o.isActive=!1})},o.lucky=function(){o.luckyActive=!0,n.get("/lucky").then(function(){o.luckyActive=!1})}}angular.module("boozio").controller("MainController",o),o.$inject=["$scope","$http","$timeout"]}(),function(){"use strict";function o(o){o.debug("runBlock end")}angular.module("boozio").run(o),o.$inject=["$log"]}(),function(){"use strict";angular.module("boozio").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function o(o,n){o.debugEnabled(!0),n.options.timeOut=3e3,n.options.positionClass="toast-top-right",n.options.preventDuplicates=!0,n.options.progressBar=!0}angular.module("boozio").config(o),o.$inject=["$logProvider","toastr"]}();