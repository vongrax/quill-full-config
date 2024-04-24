import React, { useState } from 'react';
import HTMLEditor from './components/HTMLEditor';
import './App.css';

const App = () => {

    const [value, setValue] = useState<string>('')
    const [handleOk, setHandleOk] = useState(false)

    return (
        <div className='App'>
            <div className='container'>
                <HTMLEditor setHandleOk={() => setHandleOk(false)} handleOk={handleOk} onChange={setValue}/>
                <button className='button' onClick={() => setHandleOk(true)}>Сохранить</button>
                <div className='content'>
                    <h1>Content</h1>
                    <div className='ql-editor' dangerouslySetInnerHTML={{__html: value}}/>
                </div>
            </div>
        </div>
    );
};

export default App;
