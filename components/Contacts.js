import Image from "next/image";

function Contacts({ pic, name }) {
  return (
    <div
      className="flex items-center space-x-3 mb-2 
        relative hover:bg-indigo-100 cursor-pointer p-2 rounded-xl"
    >
      <Image
        className="rounded-full"
        objectFit="cover"
        alt="online"
        src={pic}
        width={45}
        height={45}
        layout="fixed"
      />
      <p>{name}</p>
      {/* <div className="absolute bottom-2 left-2 bg-green-500 h-3 w-3 rounded-full"></div> */}
    </div>
  );
}

export default Contacts;