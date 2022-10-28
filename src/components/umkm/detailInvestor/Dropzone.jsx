//*Dropzone.js*//

import React from 'react'
import { useDropzone } from 'react-dropzone'

function Dropzone({ open, accept, onDrop }) {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({ accept, onDrop })

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div
          className={`h-36 flex flex-col justify-center items-center text-center input-zone border border-dashed border-green-400 ${
            isDragActive ? 'bg-slate-600' : ''
          }`}
        >
          {isDragActive ? (
            <p className='dropzone-content'>Release to drop the files here</p>
          ) : (
            <p className='dropzone-content'>
              Drag & drop some files here, or click to select files
            </p>
          )}
          <button
            type='button'
            onClick={open}
            className='mt-4 bg-green-400 text-sm text-white px-4 py-2 rounded-md'
          >
            Click to select files
          </button>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </>
  )
}

export default Dropzone
