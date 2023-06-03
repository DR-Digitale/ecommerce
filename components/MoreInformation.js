import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import Entretien from "./Entretien";
import Guide from "./Guide";
import ReviewForm from "./ReviewForm";
import Share from "./Share";
import { AnimatePresence, delay, LayoutGroup, motion } from "framer-motion";
import { Button } from ".";
import Icon from "./Icon";
import usePrevious from "../utils/usePrevious";


const tabAnimation = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  hidden: { opacity: 0, y: 10 },
  exit: { opacity: 0, y: 10 },
};

const tabAnimationTop = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  hidden: { opacity: 0, y: -10 },
  exit: { opacity: 0, y: -10 },
};

const MoreInformation = ({ route, onClose }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div
      layoutId="modal-container"
      className="relative w-[590px] mx-auto rounded-[16px] bg-white"
    >
      <Button
        className="absolute top-4 right-8"
        ariaLabel="close"
        onClickFunction={onClose}
      >
        <Icon icon="cancel" size={24} />
      </Button>
      <div
        role="tablist"
        aria-label="Information sur supplémentaire"
        className="tab-shadow px-8 flex gap-14"
      >
        {tabs.map((tab) => (
          <span
            className={`relative cursor-pointer py-4 ${
              tab === selectedTab
                ? "text-peps-major"
                : "link-hover text-grey-darkest"
            }`}
            role="tab"
            key={`tab-${tab.replaceAll(" ", "-").toLowerCase()}`}
            aria-selected={tab === selectedTab ? "true" : "false"}
            aria-controls={`panel-${tab.replaceAll(" ", "-").toLowerCase()}`}
            id={`tab-${tab.replaceAll(" ", "-").toLowerCase()}`}
            tabIndex={tab === selectedTab ? 0 : -1}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
            {tab === selectedTab ? (
              <motion.div
                transition={{ type: "spring" }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-peps-major"
                layoutId="underline"
              />
            ) : null}
          </span>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className="p-8 tab-item">
          {selectedTab === tabs[0] && (
            <motion.div
              key={`layout-${tabs[0]}`}
              variants={tabAnimationTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-1"
              role="tabpanel"
              tabIndex={selectedTab === tabs[0] ? 0 : -1}
              aria-labelledby="tab-1"
            >
              <Entretien />
            </motion.div>
          )}
          {selectedTab === tabs[1] && (
            <motion.div
              key={`layout-${tabs[1]}`}
              variants={tabAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-2"
              role="tabpanel"
              tabIndex={selectedTab === tabs[1] ? 0 : -1}
              aria-labelledby="tab-2"
            >
              <Guide guide={guide} />
            </motion.div>
          )}
          {selectedTab === tabs[2] && (
            <motion.div
              key={`layout-${tabs[2]}`}
              variants={tabAnimationTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-3"
              role="tabpanel"
              tabIndex={selectedTab === tabs[2] ? 0 : -1}
              aria-labelledby="tab-3"
            >
              <div className="">
                <h5 className="text-accent font-semibold pb-14">
                  Partager mon avis à la commerçante
                </h5>
                <ReviewForm />
              </div>
            </motion.div>
          )}
          {selectedTab === tabs[3] && (
            <motion.div
              key={`layout-${tabs[3]}`}
              variants={tabAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-4"
              role="tabpanel"
              tabIndex={selectedTab === tabs[3] ? 0 : -1}
              aria-labelledby="tab-4"
            >
              <Share currentUrl={route} />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default MoreInformation;

const tabs = ["Entretien", "Guide des tailles", "Avis", "Partager"];

const guide = [
  {
    pointure: "16 / 17",
    longueur: "12.00 cm",
    age: "0 - 6 mois",
  },
  {
    pointure: "18 / 19",
    longueur: "13.00 cm",
    age: "6 - 12 mois",
  },
  {
    pointure: "20 / 21",
    longueur: "14.00 cm",
    age: "12 - 18 mois",
  },
  {
    pointure: "22 / 23",
    longueur: "15.00 cm",
    age: "18 - 24 mois",
  },
  {
    pointure: "24 / 25",
    longueur: "16.00 cm",
    age: "2 - 3 ans",
  },
  {
    pointure: "26 / 27",
    longueur: "17.50 cm",
    age: "3 - 4 ans",
  },
  {
    pointure: "28 / 29",
    longueur: "18.50 cm",
    age: "4 - 5 ans",
  },
  {
    pointure: "30 / 31",
    longueur: "19.50 cm",
    age: "6 - 7 ans",
  },
  {
    pointure: "32 / 33",
    longueur: "21.00 cm",
    age: "7 - 8 ans",
  },
];
