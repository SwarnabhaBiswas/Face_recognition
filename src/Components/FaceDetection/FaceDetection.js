import React,{ useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import './FaceDetection.css';
import swal from 'sweetalert';


const FaceDetection = () => {

    const [photo,setPhoto] =useState(null);

    const handleImageUpload= (event)=> {

        const file=event.target.files[0];
        
        if(file){
            const imageURL= URL.createObjectURL(file);
            const img= new Image()
            img.src=imageURL


            img.onload=async() =>{

                const detections=await faceapi.detectAllFaces(img,new faceapi.TinyFaceDetectorOptions());

                if(detections.length >0){
                    //Face detected
                    setPhoto(imageURL);
                    swal("Success","Face Detected","success");
                }else{
                    setPhoto(null);
                    swal("Error","Please upload a valid photo for face detection","error");
                }
            }
        }else{
            setPhoto(null);
            swal("Error","Please upload an Image file","error");
        }
        
    }


    
    useEffect(() => {
        const loadModelFile = async ()=>{
            const ModelURL="/models"
            await faceapi.nets.tinyFaceDetector.loadFromUri(ModelURL)
            await faceapi.nets.faceLandmark68Net.loadFromUri(ModelURL)
            await faceapi.nets.faceRecognitionNet.loadFromUri(ModelURL)
        }

        loadModelFile();
    },[])

    return (
        <div className='wholeform'>
            <p className='f3 center'>This Brain detects Faces. Give it a try...</p>
            <div className='center form br3'>
                <input type="file" className='center br3' accept="image/*" onChange={handleImageUpload}/>
            </div>
            {
                <div className='center ma'>
                    <div className='absolute mt2 photo'>
                        <img src={photo} alt=""/>
                    </div>
                </div>
            }
        </div>
    );
}

export default FaceDetection;