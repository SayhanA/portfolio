import { motion, useInView, useAnimation } from "framer-motion"

// interface Props {
//     children: JSX.Element;
//     width?: "fit-content" | "100%";
// }

const revile = ({ children }) => {
    return (
        <div style={{ position: "relative", overflow: "hidden", background: "red" }}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate="visible"
                className="text-red-500"
            >{children}</motion.div>
        </div>
    );
};

export default revile;