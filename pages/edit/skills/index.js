import EditCard from '@/components/edit/editCard';
import EditPageLayout from '@/components/edit/editPageLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditSkills() {
  const [skillData, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/skillDataApi').then(res => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <EditPageLayout>
      <EditCard title="Edit skill">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {skillData.map((skill, idx) => {
                const { name, progress } = skill || {};
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={idx}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {name}
                    </th>
                    <td className="px-6 py-4">{progress}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </EditCard>
    </EditPageLayout>
  );
}

export default EditSkills;
