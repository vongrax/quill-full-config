// Core
import React, { FC, useEffect, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';

// @ts-ignore
import ImageResize from 'quill-image-resize-module-react';


// Styles
import 'react-quill/dist/quill.snow.css';
import './styles.css';
import { HTMLEditorConfig } from './HTMLEditorConfig';

type PropType = {
    onChange: (arg: string) => void
    handleOk: boolean;
    setHandleOk: () => void
}

const HtmlEditor: FC<PropType> = ({onChange, handleOk, setHandleOk}) => {
    const [value, setValue] = useState('')
    const {modules, formats} = HTMLEditorConfig(Quill, ImageResize);

    useEffect(() => {
        if (handleOk) {
            onChange(value)
            setHandleOk()
        }

    }, [handleOk])

    return (
        <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            formats={formats}
            onChange={(val) => setValue(val)}
        />
    );
};

export default HtmlEditor;
