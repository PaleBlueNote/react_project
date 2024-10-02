const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

export default function Profile() {
  return (
    <>
      <h1 style={{ color: "#ffffff" }}>{user.name}</h1>
      <img src={user.imageUrl}></img>
    </>
  );
}
