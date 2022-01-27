const ImageModal = (props) => {
    const imageModalBackgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'fixed',
    zIndex: '3',
    left: '0',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }

    const firstModalPictureContainerStyling = {
    display:'flex',
    flexDirection: 'row',
    backgroundImage: `url(http://amyrifflekouyeas.weebly.com/uploads/6/0/3/2/60328071/408340411.png)`,
    height: '30vh',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

    const secondModalPictureContainerStyling = {
    display:'flex',
    flexDirection: 'row',
    backgroundImage: `url(https://knilt.arcc.albany.edu/images/5/59/Grand-Staff-normal.jpg)`,
    height: '30vh',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  const handleCloseModal = (event) => {
    props.toggleImageModal(false);
  }

  return (
    <div
      className="imageModalBackground"
      style={imageModalBackgroundStyle}
      onClick={handleCloseModal}>
      <div
        className="firstModalPictureContainer"
        style={firstModalPictureContainerStyling}
        onClick={handleCloseModal}>
      </div>
      <div
        className="secondModalPictureContainer"
        style={secondModalPictureContainerStyling}
        onClick={handleCloseModal}>
      </div>
    </div>
  );
}

export default ImageModal;