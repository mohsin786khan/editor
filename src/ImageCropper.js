 import React, { Component } from 'react';
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";

 
class ImageCropper extends Component {

    constructor() {
        super();
        this.state = {
            imageDestination: "",
            ratio:1
        };
        this.imageElement = React.createRef();
    }

    componentDidMount() {
        const cropper = new Cropper(this.imageElement.current, {
            zoomable: true,
            scalable: true,
            aspectRatio: 1/2,
            crop: () => {
                const canvas = cropper.getCroppedCanvas();
                this.setState({ imageDestination: canvas.toDataURL("image/png") });
            }
        });
     }

     render() {
         return (
             <div>
                  <div class="img-container">
                    <img ref={this.imageElement} src={this.props.src} alt="Source"  />
                </div>
                <img src={this.state.imageDestination} class="img-preview" alt="Destination" />
             </div>
         );
     }
 }
 export default ImageCropper;