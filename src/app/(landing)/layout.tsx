import React from "react"

type Props = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col container relative">{children}</div>
}

export default LandingPageLayout