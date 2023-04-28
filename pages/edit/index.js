import EditPageLayout from '@/components/edit/editPageLayout';
import LinkCard from '@/components/edit/linkCard';

function index() {
  return (
    <EditPageLayout>
      <LinkCard link="/edit/about" name="edit about" />
      <LinkCard link="/edit/skills" name="edit skill" />
      <LinkCard link="/edit/project" name="edit project" />
    </EditPageLayout>
  );
}

export default index;
