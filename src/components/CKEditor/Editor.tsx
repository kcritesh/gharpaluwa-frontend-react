import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { custom_config } from './helper';

function Editor({ setFieldValue, name, value, disabled = false }) {
  const handleChange = React.useCallback(
    (data) => {
      const onChange = (data) => {
        setFieldValue(name, data);
      };
      onChange(data);
    },

    [name, setFieldValue]
  );
  return (
    <div>
      <CKEditor
        required
        editor={ClassicEditor}
        config={custom_config}
        data={value}
        disabled={disabled}
        onChange={(event, editor) => {
          const data = editor.getData();
        }}
        onBlur={(event, editor) => {
          const data = editor.getData();
          handleChange(data);
        }}
      />
    </div>
  );
}

export default React.memo(Editor);
