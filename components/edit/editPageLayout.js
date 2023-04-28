import PageLayout from '../pageLayout';
import Breadcrumb from './breadcrumb';

function EditPageLayout({ PageName, children }) {
  return (
    <PageLayout>
      <div className="containerCustom pt-5 pb-9">
        <Breadcrumb pageName={PageName} />
        {children}
      </div>
    </PageLayout>
  );
}

export default EditPageLayout;
