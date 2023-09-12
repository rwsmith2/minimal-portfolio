import React from "react";

function Intro() {
    return (

        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1  dark:text-white mb-1 md:mb-3 font-bold">
                Ryan Smith
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold"> 
                Currently a Software Engineer at Ovarrot LTD, a company in the SCADA Talematrey industry that supplied
                products to multiple international companies including Irish Water and Welsh Water. 
            </p>
        </div>
           
    )
}

export default Intro;