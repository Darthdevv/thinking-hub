import { ToastContainer } from "react-toastify";
import Approutes from "./routes/Approutes";

export const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            //   rtl={i18n.language === "ar"} // optional for RTL
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Approutes />
        </div>
    );
};
