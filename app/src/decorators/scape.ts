export function scape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const methodOrigin = descriptor.value;
  descriptor.value = function (...args: Array<any>) {
    let methodReturn = methodOrigin.apply(this, args);

    if (typeof methodReturn === 'string') {
      console.log(
        `@scape action of class ${this.constructor.name} for method ${propertyKey}`
      );

      methodReturn = methodReturn.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    return methodReturn;
  };

  return descriptor;
}