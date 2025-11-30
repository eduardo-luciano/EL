
function formatKz(n){ if(n===null||n===undefined) return '0 Kz'; return Number(n).toLocaleString('pt-PT') + ' Kz'; }

// compress image file to dataURL (max width 800, quality 0.75)
function compressImage(file, maxWidth=800, quality=0.75){
  return new Promise((resolve, reject)=>{
    if(!file) return resolve(null);
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
