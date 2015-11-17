(function(Handlebars, $){
    "use strict";

    var target = document.querySelector("select"),
        //dataSource = "handlebars/animations.json",
        dataSource = "handlebars/selected-animations.json",
        templatePath = "handlebars/template.hbs";

    $.get(dataSource, function(data) {
        console.log(data);

        $.get(templatePath, function(source) {

            var template  = Handlebars.compile(source),
                output = template(data);

            target.innerHTML = output;
        });
    });

})(Handlebars, jQuery);