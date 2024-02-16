import { ReactNode } from "react";

function Highlight({ children }: { children: ReactNode }) {
    console.log("Highlight", children);
    return (
        <span style={{ backgroundColor: "yellow", color: "red" }}>
        {children}
        </span>
    );
}

export default Highlight;