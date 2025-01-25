import { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren) {
    return (
        <div className="max-w-6xl mx-auto p-2 mt-7">
            {children}
        </div>

    );
}

export default MainLayout;
