import { NavLink } from "react-router-dom";
const Hero = () => {
    return (
        <main className="flex flex-col mt-12 w-full max-w-screen-lg bg-white shadow-md p-4 rounded-md">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-4xl font-semibold text-blue-700 mb-8 text-center sm:text-left">
                    Welcome to iGenerator
                </h1>
                <div className="space-y-4 text-[15px] font-semibold sm:text-base sm:text-left">
                    <p className="text-center sm:text-left">
                        The easiest way to generate invoices with just a few clicks.
                    </p>
                    <p className="font-semibold text-center sm:text-left">
                        <span className="text-blue-700">Simple & Fast:</span> Generate invoices in seconds with an easy-to-use interface that simplifies the entire process.
                    </p>
                    <p className="font-semibold text-center sm:text-left">
                        <span className="text-blue-700">Customizable Templates:</span> Choose from a variety of invoice templates that can be easily tailored to your business needs.
                    </p>
                    <p className="font-semibold text-center sm:text-left">
                        <span className="text-blue-700">Download & Share:</span> Download your invoices as PDF or share them directly via email for convenience and efficiency.
                    </p>
                </div>

                {/* Responsive layout adjustment */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-center space-y-4 sm:space-y-0">
                    <NavLink to={"/form"} className="py-3 px-6 bg-blue-700 hover:bg-blue-500 text-white font-semibold rounded-lg">
                        Get Started
                    </NavLink>
                </div>
            </div>
        </main>
    );

};

export default Hero;
