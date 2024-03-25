import Loader from "./Loader";

/* eslint-disable react/prop-types */
const Output = ({ data, loading }) => {
    return (
        <div className="flex justify-center mt-2 lg:mt-5">
            {
                loading ?
                    (
                        <div>
                            <Loader />
                        </div>
                    )
                    :
                    (
                        <div className="">
                            {data !== null ?
                                (
                                    <div>
                                        {/* Youtube Video Preview  */}
                                        <iframe
                                            src={`${data.url}`}
                                            title="video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            className=" rounded-lg w-96 h-56 lg:w-[46em] lg:h-[26em]"
                                        />

                                        {/* Download Info  */}
                                        <div className="">
                                            {data?.info.map((formatName, index) => {
                                                return (
                                                    <div key={index} className="bg-gray-800 hover:bg-gray-700 mt-4 text-center py-4 mb-2 text-white font-black cursor-pointer rounded-lg">
                                                        <a
                                                            href={formatName.url}
                                                            target="_blank"
                                                            download
                                                        >
                                                            {formatName.mimeType.split(';')[0] + " "}
                                                            {formatName.hasVideo
                                                                ?
                                                                formatName.height + "p"
                                                                :
                                                                ""
                                                            }
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div className="">
                                        {/* Not Found Image  */}
                                        <div className="flex justify-center">
                                            <img className="mb-2" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                        </div>
                                        {/* Text  */}
                                        <h1 className="text-center font-semibold text-xl">No download yet</h1>
                                    </div>

                                )
                            }
                        </div>
                    )
            }


        </div>
    );
}

export default Output;
