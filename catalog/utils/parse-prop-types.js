export default (component: Object) => {
  return Object.keys(component.__docgenInfo.props).map(key => {
    const prop = component.__docgenInfo.props[key];
    return {
      Property: key,
      PropType: prop.type.name,
      Required: prop.required ? 'Yes' : null,
      Default: prop.defaultValue ? `\`${prop.defaultValue.value}\`` : null,
      Description: prop.description
    };
  });
};
