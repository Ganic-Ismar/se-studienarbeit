import React from "react";

const Footer = () => {
    return (
        <>
            <div className="absolute inset-x-0 bottom-3">
                <hr class="h-px my-3 border-0 bg-neutral-600/[0.3]" />
                <div className="flex justify-around text-neutral-500">
                    <p>©2023 Herrnberger, Florian | Ganic, Ismar | Liegel, Julian</p>
                    <p>&#x2800;</p>
                    <p>Hochschule München</p>
                </div>
            </div>
        </>
    )
}

export default Footer