
  /* eslint-disable no-var */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import Handlebars from 'handlebars/runtime';
  export const template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"i18n") : depth0)) != null ? lookupProperty(stack1,"subject") : stack1), depth0));
},"useData":true});
