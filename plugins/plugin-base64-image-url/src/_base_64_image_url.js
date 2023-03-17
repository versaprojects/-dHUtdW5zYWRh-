function _base_64_image_url({ params }) {
  const { dataType, url  } = params;
  var img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = url;
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL(dataType);
  console.log(dataURL);
  return dataURL;
}

export default _base_64_image_url;