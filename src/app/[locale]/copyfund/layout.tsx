import React from "react";

const CopyFundLayout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div>
            额外的SideBar
        </div>
        <div>
            {children}
        </div>
    </>
}
export default CopyFundLayout