import React, { useState, useEffect } from "react"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { useDropzone } from "react-dropzone";
import './test.css';



function BasicDropzone(props) {



  
  
  const { onChange} = props;
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      
      // console.log(acceptedFiles);
      // onChangess(acceptedFiles);
      
      
      
      
      setFiles(
        
        acceptedFiles.map(file =>
          
          
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            
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
  
  useEffect(() => {
    (files) => onChange(files)

  }, []);


  

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="mx-1">
          Upload
        </p>
      </div>
      <aside className="thumb-container">{thumbs}</aside>
    </section>
  )
}

class UploadImg extends React.Component {
  render() {
    return (
      <Card>
        {/* <CardHeader>
        Avatar
        </CardHeader> */}
        <CardContent>
          <BasicDropzone  />
        </CardContent>
      </Card>
    )
  }
}




export default UploadImg;