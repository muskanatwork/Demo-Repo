const imageUrls = [
    "f15deaa797aaa5901d514fde36a51ea9.jpg",
    "f15deaa797aaa5901d514fde36a51ea9.jpg",
    "f15deaa797aaa5901d514fde36a51ea9.jpg",
    "f15deaa797aaa5901d514fde36a51ea9.jpg",
  ];
  
  const gallery = document.getElementById('gallery');
  
  for (let i = 0; i < imageUrls.length; i++) {
    const img = document.createElement('img');
    img.src = imageUrls[i];
    img.alt = `Image ${i + 1}`;
    gallery.appendChild(img);
  }
  