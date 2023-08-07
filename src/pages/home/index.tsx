import { HOME_PAGE_TABS } from "@utils/constants";
import { RoverPhotos } from "./rover-photos";
import { Tab } from "@headlessui/react";
import { classNames } from "@utils/formatters";

const Home = (): React.ReactElement => {
  const tabs = Object.values(HOME_PAGE_TABS);

  return (
    <div className="flex flex-col z-10 w-full items-center font-mono lg:flex">
      <Tab.Group>
        <Tab.List className="flex gap-10 mb-12">
          {tabs.map((tab) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  selected ? "border-b-2 border-orange" : "border-0",
                  "mx-2 outline-none font-bold text-xl text-dark-blue"
                )
              }
              key={tab}
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab} className="w-full">
              <RoverPhotos tab={tab} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Home;
