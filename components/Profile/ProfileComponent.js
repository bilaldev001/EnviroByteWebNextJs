import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EditAccountForm from "./EditAccountForm";
import ChangePasswordForm from "./ChangePasswordForm";

const ProfileComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="pb-100 pt-[10rem] dark:bg-[#151719] ">
      <div className="container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="md:col-span-1">
              <TabList className="bg-[#ffffff]  rounded-lg py-4 px-3 dark:bg-[#25282C] shadow-teamCard">
                <Tab
                  selectedClassName="bg-[#5d5dff] dark:bg-gray-400/30 dark:text-[#ffffff] text-[#ffffff] font-semibold"
                  className={`outline-none rounded-lg transition duration-200 dark:shadow-[#00b0ee26] cursor-pointer text-[#5d5dff] ${
                    tabIndex === 0
                      ? "dark:text-[#023496]"
                      : "dark:text-[#D9E3EA]"
                  } px-4 py-3`}
                >
                  Edit Account
                </Tab>
                <Tab
                  selectedClassName="bg-[#5d5dff] dark:bg-gray-400/30 dark:text-[#ffffff] text-[#ffffff] font-semibold"
                  className={`outline-none rounded-lg transition duration-200 dark:shadow-[#00b0ee26] cursor-pointer text-[#5d5dff] ${
                    tabIndex === 1
                      ? "dark:text-[#023496]"
                      : "dark:text-[#D9E3EA]"
                  } px-4 py-3`}
                >
                  Change Password
                </Tab>
                <Tab
                  selectedClassName="bg-[#5d5dff] dark:bg-gray-400/30 dark:text-[#ffffff] text-[#ffffff] font-semibold"
                  className={`outline-none rounded-lg transition duration-200 dark:shadow-[#00b0ee26] cursor-pointer text-[#5d5dff] ${
                    tabIndex === 2
                      ? "dark:text-[#023496]"
                      : "dark:text-[#D9E3EA]"
                  } px-4 py-3`}
                >
                  Preferred Content
                </Tab>
              </TabList>
            </div>
            <div className="md:col-span-2">
              <TabPanel className="rounded-lg shadow-teamCard">
                {/* Tabs item 1 */}
                <EditAccountForm />
              </TabPanel>
              <TabPanel className="rounded-lg shadow-teamCard">
                {/* Tabs item 2 */}
                <ChangePasswordForm />
              </TabPanel>
              {/* Tabs item 3 */}
              <TabPanel></TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileComponent;
