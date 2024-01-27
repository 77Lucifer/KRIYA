const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * (maxSize / 2);
  
    canvas.width = safeArea;
    canvas.height = safeArea;
  
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate(getRadianAngle(crop.rotation));
    ctx.translate(-safeArea / 2, -safeArea / 2);
  
    ctx.beginPath();
    ctx.arc(safeArea / 2, safeArea / 2, safeArea / 2, 0, 2 * Math.PI); // Create a circular path
    ctx.clip();
  
    ctx.drawImage(
      image,
      (maxSize - image.width) / 2 + crop.x,
      (maxSize - image.height) / 2 + crop.y,
      crop.width,
      crop.height
    );
  
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob));
      }, 'image/jpeg');
    });
  };
  
  export { getCroppedImg };