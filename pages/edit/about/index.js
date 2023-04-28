import EditCard from '@/components/edit/editCard';
import EditPageLayout from '@/components/edit/editPageLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AboutEdit() {
  const [aboutData, setData] = useState({});
  useEffect(() => {
    axios.get('/api/aboutApi').then(res => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  const { heading, description, information } = aboutData || {};

  return (
    <EditPageLayout>
      <EditCard title="Edit about">
        <div className="pt-6">
          <h3 className="capitalize font-semibold">Heading</h3>
          <div>{heading}</div>
        </div>
        <div className="pt-6">
          <h3 className="capitalize font-semibold">description</h3>
          <div>{description}</div>
        </div>

        <div className="pt-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {information?.map((item, idx) => {
                  const { name, details } = item || {};
                  return (
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        key={idx}
                      >
                        {name}
                      </th>
                      <td className="px-6 py-4">{details}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </EditCard>
    </EditPageLayout>
  );
}

export default AboutEdit;
