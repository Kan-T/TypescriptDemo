const worker = {
  name: "Frank",
  employeeId: "0032"
}

class Human {
  name: string;
  id: number;
}

const adapter = {
  delUnadaptedFields: true,
  fields: [
    ["id", "employeeId"]
  ]
}

const renameObjProp = (source, adapter) => {
  const {delUnadaptedFields} = adapter;
  let targetObj = {};
  if (!delUnadaptedFields) {
    targetObj = {
      ...source
    };
  }
  adapter.fields.map(([targetField, sourceField]) => {
    if (sourceField) {
      targetObj[targetField] = source[targetField];
    } else {
      delete targetObj[sourceField];
      targetObj[targetField] = source[sourceField];
    }
  });
  return targetObj;
}

console.log(renameObjProp(worker, adapter));