const Intro = ({ introText, name }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{introText}</p>
    </>
  );
};

export default Intro;
