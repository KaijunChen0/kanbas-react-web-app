import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import React from "react";

const ConditionalOutput = () => {
    return (
        <>  
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
        </>
    );
};

export default ConditionalOutput;