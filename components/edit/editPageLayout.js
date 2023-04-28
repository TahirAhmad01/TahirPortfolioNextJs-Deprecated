import PageLayout from '../pageLayout';
import Breadcrumb from './breadcrumb';

function EditPageLayout({ PageName, children }) {
  return (
    <PageLayout>
      <div className="containerCustom pt-4 pb-14">
        <Breadcrumb pageName={PageName} />
        {children}
      </div>
    </PageLayout>
  );
}

export default EditPageLayout;
