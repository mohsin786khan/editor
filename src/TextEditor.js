import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

function TextEditor() {
    const [text,setText]=useState("")
    return (
    
        <div className="editor">
            <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    setText(data);   
                }
                }
            />
            <div className="content">
                <h2>content</h2>
                <p>{parse(text)}</p>
            </div>
            </div>
    );
}

export default TextEditor;