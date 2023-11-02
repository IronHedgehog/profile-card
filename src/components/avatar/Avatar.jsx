const Avatar = ({ photo, name }) => {
  return <img className="avatar" src={photo} alt={name} title={name} />;
};

export default Avatar;
