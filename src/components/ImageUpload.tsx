import { useEffect, useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./styles/imageupload.css"

const ImageUpload = (props: any) => {

    const [fileInput, setFileInput] = useState<any>();
    const [hasInput, setHasInput] = useState(false);
    const [equalAspect, setEqualAspect] = useState(false);
    const [round, setRound] = useState(false);
    const [croppedImage, setCroppedImage] = useState<any>();
    

    const dialogRef = useRef<HTMLDialogElement>(null);
    const cropperRef = useRef<any>(null);

    function getBase64(file: any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          console.log(reader.result);
          setFileInput(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };

        return reader.result;
     }

    const handleFile = async(e: any) => {
        const file = e.currentTarget.files[0];

        console.log(file);
        getBase64(file);
    }

    useEffect(() => {
        setHasInput(fileInput !== null);
        showEditor();
    }, [fileInput])


    const showEditor = () => {
        if(fileInput) dialogRef.current?.showModal();
    }

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        console.log(cropper.getCroppedCanvas().toDataURL());
        setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        dialogRef.current?.close();
    };

    return ( 
        <div>
            {croppedImage && 
            <div id="img-display">
                <img id={props.round ? "round" : ""} width={props.width || 250} src={croppedImage} />
                <button onClick={showEditor}>Edit</button>
            </div>
            }
            <input id="image-input" type="file" accept=".png,.jpg,.jpeg,.gif" onInput={(e) => {handleFile(e)}} />
            <dialog ref={dialogRef} id="editor">
                <div id={props.round ? "round" : "rect"}>
                    <Cropper
                        src={fileInput}
                        style={{height: 500, width: 500}}
                        initialAspectRatio={props.aspect}
                        aspectRatio={props.aspect}
                        guides={false}
                        ref={cropperRef}
                    />
                </div>
                <button onClick={onCrop}>Save</button>
            </dialog>
        </div>
     );
}
 
export default ImageUpload;

//<img src={fileInput} />