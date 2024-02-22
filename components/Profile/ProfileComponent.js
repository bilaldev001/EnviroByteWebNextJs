import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EditAccountForm from "./EditAccountForm";

const ProfileComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="contact-section ptb-100 dark:bg-[#151719]">
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <TabList className="bg-[#ffffff] rounded-lg py-4 px-3 dark:bg-[#25282C]">
                <Tab
                  selectedClassName="bg-[#0e3496] dark:bg-[#ffffff] dark:text-[#0e3496] text-[#ffffff] font-semibold"
                  className=" outline-none rounded-lg transition duration-200 dark:shadow-[#00b0ee26] cursor-pointer text-[#0e3496] dark:text-[#ffffff] px-4 py-3"
                >
                  Edit Account
                </Tab>
                <Tab
                  selectedClassName="bg-[#0e3496] dark:bg-[#ffffff] dark:text-[#0e3496] text-[#ffffff] font-semibold"
                  className="outline-none rounded-lg transition duration-200 dark:shadow-[#00b0ee26] cursor-pointer text-[#0e3496] dark:text-[#ffffff] px-4 py-3"
                >
                  Preferred Content
                </Tab>
              </TabList>
            </div>
            <div className="col-span-2">
              <TabPanel>
                {/* Tabs item 1 */}
                <EditAccountForm />
              </TabPanel>
              {/* Tabs item 2 */}
              <TabPanel></TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileComponent;
