import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
        <h2 className="text-gray text-center font-light text-4xl mt-20 tracking-[0.25px] leading-normal max-[580px]:text-2xl">Reliable, efficient delivery</h2>
        <h1 className="text-gray text-center font-semibold text-4xl mt-0.5 tracking-[0.25px] leading-normal max-[580px]:text-2xl">Powered by Technology</h1>
        <p className="text-gray mt-[13px] text-[15px] text-center opacity-50 w-[540px] max-[580px]:w-full max-[580px]:px-8 tracking-[0.104px] leading-[25px]">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

        <div className="flex max-[400px]:w-full items-center mt-16 max-[1150px]:flex-col">
            <div className="overflow-hidden max-[400px]:w-[100vw-64px] max-[400px]:mx-8 relative min-[400px]:w-[350px] h-[250px] bg-white rounded-lg shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.50)]">
                <div className="w-full h-1 bg-cyan"></div>
                <h3 className="mt-7 ml-8 font-semibold leading-normal text-gray text-xl">Supervisor</h3>
                <p className="mt-1.5 mx-8 font-normal text-gray text-[13px] opacity-50 leading-[23px] tracking-[0.09px]">Monitors activity to identify project roadblocks</p>
                <Image src="/icon-supervisor.svg" alt="Supervisor Icon" width={64} height={64} className="absolute bottom-8 right-8" />
            </div>

            <div className="flex max-[400px]:w-full flex-col min-[400px]:mx-[30px]">
                <div
                    className="overflow-hidden max-[1150px]:mt-[30px] max-[400px]:w-[100vw-64px] max-[400px]:mx-8 relative min-[400px]:w-[350px] h-[250px] bg-white rounded-lg shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.50)]">
                    <div className="w-full h-1 bg-red"></div>
                    <h3 className="mt-7 ml-8 font-semibold leading-normal text-gray text-xl">Team Builder</h3>
                    <p className="mt-1.5 mx-8 font-normal text-[13px] text-gray opacity-50 leading-[23px] tracking-[0.09px]">Scans our talent network to create the optimal team for your project</p>
                    <Image src="/icon-team-builder.svg" alt="Supervisor Icon" width={64} height={64}
                           className="absolute bottom-8 right-8"/>
                </div>
                <div
                    className="overflow-hidden mt-[30px] max-[400px]:w-[100vw-64px] max-[400px]:mx-8 relative min-[400px]:w-[350px] h-[250px] bg-white rounded-lg shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.50)]">
                    <div className="w-full h-1 bg-yellow"></div>
                    <h3 className="mt-7 ml-8 font-semibold leading-normal text-gray text-xl">Karma</h3>
                    <p className="mt-1.5 mx-8 font-normal text-[13px] text-gray opacity-50 leading-[23px] tracking-[0.09px]">Regularly evaluates our talent to ensure quality</p>
                    <Image src="/icon-karma.svg" alt="Supervisor Icon" width={64} height={64}
                           className="absolute bottom-8 right-8"/>
                </div>
            </div>

            <div
                className="overflow-hidden max-[1150px]:mt-[30px] max-[400px]:w-[100vw-64px] max-[400px]:mx-8  max-[1150px]:mb-8 relative min-[400px]:w-[350px] h-[250px] bg-white rounded-lg shadow-[0px_15px_30px_-11px_rgba(131,166,210,0.50)]">
                <div className="w-full h-1 bg-blue"></div>
                <h3 className="mt-7 ml-8 font-semibold leading-normal text-gray text-xl">Calculator</h3>
                <p className="mt-1.5 mx-8 font-normal text-gray text-[13px] opacity-50 leading-[23px] tracking-[0.09px]">Uses data from past projects to provide better delivery estimates</p>
                <Image src="/icon-calculator.svg" alt="Supervisor Icon" width={64} height={64}
                       className="absolute bottom-8 right-8"/>
            </div>
        </div>
    </div>
  );
}
