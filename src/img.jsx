import './img.css'

// eslint-disable-next-line react/prop-types
export const ImageComponent = ( { imageUrl }) => {
     
    return(
        <div className="imagen"> 
        <img src={imageUrl} alt="Link de API" />
        </div>  
    )
}