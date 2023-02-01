import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import Navbar from './Navbar';


function Task2() {

  const htmlinit = `
  <div></div>
  <!-- color1 #62374e -->
  <!-- color2 #fdc57b -->
  `
  const cssinit = `
    div {
      width: 100px;
      height: 100px;
      background: #dd6b4d;
    }
  `

  const [htmlC, setHtmlC] = useState(htmlinit);
  const [cssC, setCssC] = useState(cssinit);
  const [jsC, setJsC] = useState('');

  const srcDoc = `
    <html>
      <body>${htmlC}</body>
      <style>${cssC}</style>
      <script>${jsC}</script>
    </html>
  `

  const onChangehtmlC = React.useCallback((value, viewUpdate) => {
    setHtmlC(value)
    console.log('valueh:', value);
  }, []);

  const onChangecssC = React.useCallback((value, viewUpdate) => {
    setCssC(value)
    console.log('valuec:', value);
  }, []);

  const onChangejsC = React.useCallback((value, viewUpdate) => {
    setJsC(value)
    console.log('valuej:', value);
  }, []);



  return (
    <>
    <div className=' p-10'>

    
        <Navbar/>
      <div id='container' className=' flex flex-col mt-5'>
        <div id='left-section' className='flex bg-green-300 justify-between'>
          <div className='flex flex-col'>
            <h1 className=' bg-red-400'>HTML</h1>
            <CodeMirror
              value="<div></div>
<!-- color1 #62374e -->
<!-- color2 #fdc57b -->"
              height="200px"
              width="525px"
              theme={okaidia}
              extensions= {[html({autoCloseTags:true})]}
              onChange={onChangehtmlC}
            />
          </div>

          <div className=' flex flex-col'>
            <h1 className=' bg-red-400'>CSS</h1>
            <CodeMirror
              value="div {
  width: 100px;
  height: 100px;
  background: #dd6b4d;
}"
              height="200px"
              width="525px"
              extensions= {[css()]}
              theme={okaidia}
              onChange={onChangecssC}
            />
          </div>

          <div className=' flex flex-col'>
            <h1 className=' bg-red-400'>JS</h1>
            <CodeMirror
              value="console.log('hello world!');"
              height="200px"
              width="525px"
              theme={okaidia}
              extensions={[javascript({ jsx: true })]}
              onChange={onChangejsC}
            />
          </div>
        </div>
        <div id='right-section' className=' flex h-[300px]'>
          <div id='initial' className=' bg-pink-600 w-1/2'>
            <iframe
              srcDoc={srcDoc}
              title='output'
              sandbox='allow-script'
              frameBorder='0'
              width='100%'
              height='100%'
            />
          </div>
          <div id='value' className=' bg-purple-500 w-1/2'>
            <img src="form.png" alt="form" className=' w-full h-full'/>
          </div>
        </div>
        <div id='hints' className=' bg-slate-100'>
          <h1>HINTS:-</h1>
          <div className=' flex space-x-3'>
            <p>color1</p>
            <div className=' w-5 h-5 bg-[#62374e] rounded-lg'></div>
            <p>color2</p>
            <div className=' w-5 h-5 bg-[#fdc57b] rounded-lg'></div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Task2;