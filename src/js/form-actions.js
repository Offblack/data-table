export const generateForm = (form, keyData, valueData) => {
   for (let user in valueData) {
      if (keyData[user] != 'id') {
         let input = document.createElement('input');
         let valueType = typeof valueData[user];
         if (valueType === 'string') input.type = 'text';
         if (valueType === 'number') input.type = 'number';
         if (valueType === 'boolean') input.type = 'checkbox';
         form.appendChild(input);
      }
   }
};
