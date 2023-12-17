
const ImageGrid = () => {
  const imageUrls = [
    'https://yantrammedtech.com/assets/img1-21a60f29.png',
    'https://yantrammedtech.com/assets/img2-a3a557a2.png',
    'https://yantrammedtech.com/assets/img3-b086cb74.png',
    'https://yantrammedtech.com/assets/img4-685e238d.png',
    'https://yantrammedtech.com/assets/img5-d4bc11af.png',
    'https://yantrammedtech.com/assets/img6-d8188afa.png',
    'https://yantrammedtech.com/assets/img7-aa351814.png',
    'https://yantrammedtech.com/assets/img8-567d34c0.png',
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
