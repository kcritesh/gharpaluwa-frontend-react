import axios from 'axios';

import axiosConfig from 'src/config/axios.config';
export const custom_config = {
  extraPlugins: [MyCustomUploadAdapterPlugin],
  toolbar: {
    items: [
      'heading',
      '|',
      'alignment',
      '|',
      'bold',
      'italic',
      'strikethrough',
      'underline',
      'subscript',
      'superscript',
      '|',
      'link',
      '|',
      'outdent',
      'indent',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      '|',
      'code',
      'codeBlock',
      '|',
      'insertTable',
      '|',
      'uploadImage',
      'blockQuote',
      '|',
      'undo',
      'redo'
    ],
    shouldNotGroupWhenFull: true
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  }
};

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}
function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise((resolve, reject) => {
        const body = new FormData();
        loader.file.then(async (file) => {
          body.append('files', file);
          // let headers = new Headers();
          // headers.append("Origin", "http://localhost:3000");
          const { data } = await axiosConfig.get(`api/putSignedUrl/images/gharpaluwa`);
          console.log(data);
          await axios.put(data.url, file, {
            headers: {
              'Content-Type': file.type,
              "x-amz-acl": "public-read",
            }
          });
          const key = data.objectKey;
          resolve({
            default: `https://gharpaluwa.blr1.digitaloceanspaces.com/${key}`
          });
        });
      });
    }
  };
}
