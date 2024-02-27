const SubContent = ({src,title,style}) => {
  return (
    <>
      <div className="w-full h-auto border-[1px] bg-white mt-4 mx-4">
        <div className="w-full h-auto my-2">
            <div className="w-full h-auto flex flex-col items-center">
            <img src={src} alt="" className={`${style}`} />
            <h1 className="w-2/4 text-center font-playfair font-bold leading-23.17">{title}</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default SubContent;
