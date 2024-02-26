

const Feature = ({src,title}) => {
    return(
        <>
        <div className="w-full h-auto flex mx-10">
            <div className="w-full h-auto flex flex-col items-start ">
                <img src={src} alt="feature pic!" />
                <h1 className="font-playfair font-bold text-xl leading-32.4">{title}</h1>
                <p className=" text-color5 leading-23.17 text-[13px]"> if you are going to use a passage offer Lorem lpsum, you need to be sure hidden in the middle of text.</p>
                < button type="button" className="w-7/12 text-center text-[10px] py-2 mt-4 font-bold bg-[#fff] border-2 border-color1" >READ MORE</button>
            </div>
        </div>
        </>
    )
}

export default Feature;