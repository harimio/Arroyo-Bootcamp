export const GifContainer = ({ data }) => {
  console.log("esta es la data:", data);
  return (
    <>
      {data.map((element) => (
        <img key={element.id} alt="" src={element.images.fixed_height.url} />
      ))}
    </>
  );
};
