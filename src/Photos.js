const Photos = ({image}) => {
    return (
        <div className="image-container">
            <div className="infoImage">
                <img src={image} alt="images" height="300px" width=""></img>
                <div className="btn-container">
                </div>
            </div>
            
        </div>
    )
}

export default Photos;