import MainLayout from "../../shared/components/MainLayout";
import PageHeading from "../../shared/components/PageHeading";

function PageNotFound() {
    return (
        <MainLayout>
            <PageHeading title={"Oops ! Page not found"} subtitle={"Sorry this page is not available"} />
        </MainLayout>
    );
}

export default PageNotFound;
