
  /* eslint-disable no-var */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import Handlebars from 'handlebars/runtime';
  export const template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html lang='en'>\n  <head>\n    <meta charset='UTF-8' />\n    <meta name='viewport' content='width=device-width, initial-scale=1.0' />\n    <title>Email Template</title>\n    <link\n      rel='stylesheet'\n      href='https://my.otiuming.com/styles/customers-emails.css'\n    />\n  </head>\n  <body>\n    <div class='body'>\n      <div class='header'>\n        <img\n          src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"organization") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1), depth0))
    + "'\n          alt='Company Logo'\n          style='max-width: 200px;'\n        />\n      </div>\n      <div class='content'>\n        <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"i18n") : depth0)) != null ? lookupProperty(stack1,"hello") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"customer") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</h1>\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"i18n") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</p>\n        <a href='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"customer") : depth0)) != null ? lookupProperty(stack1,"bookingUrl") : stack1), depth0))
    + "'>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"i18n") : depth0)) != null ? lookupProperty(stack1,"openBooking") : stack1), depth0))
    + "</a>\n      </div>\n      <div class='footer'>\n        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"poweredBy") : stack1), depth0))
    + "\n        <div class='powered-by'>\n          <img\n            src='"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"company") : depth0)) != null ? lookupProperty(stack1,"logo") : stack1), depth0))
    + "'\n            alt='Otiuming Logo'\n            class='powered-logo'\n          />\n        </div>\n      </div>\n    </div>\n  </body>\n</html>";
},"useData":true});
