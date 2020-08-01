import React, { useState, useEffect } from "react"
// import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import CardTitle from '@material-ui/core/Card'
import { useDropzone } from "react-dropzone"
import './test.css';

function ProgrammaticallyDropzone(props) {
 
  
  const [files, setFiles] = useState([])
  // console.log(files[0]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
   
    
    onDrop: acceptedFiles => {  
      props.onFiles(acceptedFiles[0])
      
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const thumbs = files.map(file => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
        
    
    },
    [files]
  )
 

  return (
    <section>
      <aside className="thumb-container">{thumbs}</aside>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="mx-2">
          upload
        </p>
      </div>
      <Button outline className="mx-1" onClick={open} variant="outlined" >
        Open File Dialog
      </Button>
    
    </section>
  )
}

function UploadImg(props) {
  const { onFiles } = props;
  
    return (
      <Card>
        <CardHeader>
          <Typography>Opening File Dialog </Typography>
        </CardHeader>

        <CardContent>
        
        
          <ProgrammaticallyDropzone onFiles={onFiles}/>
        
        </CardContent>
        
      </Card>
    )
  
}

export default UploadImg;
