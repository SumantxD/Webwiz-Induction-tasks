import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import Navbar from './Navbar';


function Task4() {

  const htmlinit = `
  <div id='container'>
  <div id='destination'></div>
</div>
  `
  const cssinit = `
    #container {
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 100px;
  background-color: purple;
}
#destination {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 100%;
  background: yellow;
}
  `

  const [htmlC, setHtmlC] = useState(htmlinit);
  const [cssC, setCssC] = useState(cssinit);
  const [jsC, setJsC] = useState('');

  const [st, setSt] = useState(0);

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
              value="<div id='container'>
  <div id='destination'></div>
</div>"
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
              value="#container {
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 100px;
  background-color: purple;
}
#destination {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 100%;
  background: yellow;
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
            <div className='flex overflow-x-auto gap-x-5 whitespace-nowrap'>
                <button onClick={ () => setSt(0)} className='text-gray-700 bg-slate-300 p-3 rounded-lg font-medium'>ST1</button>
                <button onClick={ () => setSt(1)} className='text-gray-700 bg-slate-300 p-3 rounded-lg font-medium'>ST2</button>
                <button onClick={ () => setSt(2)} className='text-gray-700 bg-slate-300 p-3 rounded-lg font-medium'>ST3</button>
                <button onClick={ () => setSt(3)} className='text-gray-700 bg-slate-300 p-3 rounded-lg font-medium'>ST4</button>
                <button onClick={ () => setSt(4)} className='text-gray-700 bg-slate-300 p-3 rounded-lg font-medium'>ST5</button>
            </div>

            {(st === 0) && <img src="st1.png" alt="st1" className='p-2'/>}
            {(st === 1) && <img src="st2.png" alt="st2" className='p-2'/>}
            {(st === 2) && <img src="st3.png" alt="st3" className='p-2'/>}
            {(st === 3) && <img src="st4.png" alt="st4" className='p-2'/>}
            {(st === 4) && <img src="st5.png" alt="st5" className='p-2'/>}

            
          </div>
        </div>
        <div id='hints' className=' bg-slate-100'>
          <h1>HINTS:-</h1>
          <p>justify-content</p>
          <p>flex-start: items will align to the left side of the container</p>
          <p>flex-end: items will align to the right side of the container</p>
          <p>center: items align at the center of the container.</p>
          <p>space-between: Items display with equal spacing between them.</p>
          <p>space-around: Items display with equal spacing around them.</p>
          <p>For example, justify-content: flex-end; will move the frog to the right. </p>
        </div>
      </div>
      </div>
    </>
  );
}
export default Task4;