import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon from "../components/Icon";
import top from "../assets/texture/top-page.svg";
import { Button } from "../components";
import { motion } from "framer-motion";
import PersonalInformations from "../components/PersonalInformations";
import Invoicing from "../components/Invoicing";
import OrdersItem from "../components/OrdersItem";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getOrders, getUsers } from "../utils/woocommerceApi";

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

const Account = ({ users, orders }) => {
  const session = useSession();
  const [selectedTab, setSelectedTab] = useState("information");
  const id = session?.data?.user?.id;
  const user = users.filter((user) => user.id === id);
  const userOrders = orders.filter((order) => order.customer_id === 1);
  return (
    <div>
      <div className="sticky top-0 left-0 w-full h-[7.29vw] z-20">
        <Image src={top} alt="" layout="fill" />
        <div className="absolute top-[3.125vw] left-[8%] z-40 px-14 text-foreground bg-white rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.08)]">
          <p className="flex items-center gap-4 border-b border-foreground py-4">
            <Icon icon="personalSpace" size={24} /> Espace personnel
          </p>
        </div>
      </div>
      <div className="w-[84%] mx-auto pb-12">
        <h3 className="text-foreground">
          Bienvenue{" "}
          <span className="text-gradient capitalize">
            {session.data?.user?.user_display_name}
          </span>
        </h3>
      </div>
      <div className="w-[84%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row w-full gap-1 rounded-[16px] md:rounded-[64px] p-1 text-grey-darker bg-halftone mb-8 md:mb-0 md:w-auto">
            <Button
              onClickFunction={() => setSelectedTab("information")}
              className={`relative z-10 py-4 px-8 rounded-[64px] md:w-[20.57vw] ${
                selectedTab === "information" ? "text-white" : "link-hover"
              }`}
            >
              Informations
              {selectedTab === "information" ? (
                <motion.div
                  transition={{ type: "spring", duration:0.35 }}
                  className="absolute -z-10 inset-0 w-full h-full bg-foreground rounded-[16px] md:rounded-[64px] "
                  layoutId="bg-tab"
                />
              ) : null}
            </Button>
            <Button
              onClickFunction={() => setSelectedTab("facturation")}
              className={`relative z-10 py-4 px-8 rounded-[64px] md:w-[20.57vw] ${
                selectedTab === "facturation" ? "text-white" : "link-hover"
              }`}
            >
              Livraision & Facturation
              {selectedTab === "facturation" ? (
                <motion.div
                  transition={{ type: "spring", duration:0.35 }}
                  className="absolute -z-10 inset-0 w-full h-full bg-foreground rounded-[16px] md:rounded-[64px] "
                  layoutId="bg-tab"
                />
              ) : null}
            </Button>
            <Button
              onClickFunction={() => setSelectedTab("commande")}
              className={`relative z-10 py-4 px-8 rounded-[64px] md:w-[20.57vw] ${
                selectedTab === "commande" ? "text-white" : "link-hover"
              }`}
            >
              Commandes
              {selectedTab === "commande" ? (
                <motion.div
                  transition={{ type: "spring", duration:0.35 }}
                  className="absolute -z-10 inset-0 w-full h-full bg-foreground rounded-[16px] md:rounded-[64px] "
                  layoutId="bg-tab"
                />
              ) : null}
            </Button>
          </div>
          <Button
            className="button-outline"
            onClickFunction={() => signOut({ callbackUrl: "/" })}
          >
            <Icon icon="logOut" size={24} /> Se déconnecter
          </Button>
        </div>
        <motion.div layout className="pt-8">
          {selectedTab === "information" && (
            <motion.div
              key={`layout-personal-information`}
              variants={tabAnimationTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-1"
              role="tabpanel"
              tabIndex={selectedTab === "information" ? 0 : -1}
              aria-labelledby="tab-1"
            >
              <PersonalInformations
                firstName={user[0]?.first_name}
                name={user && user[0]?.last_name}
                pseudo={user && user[0]?.username}
                email={user && user[0]?.email}
                tel={user && user[0]?.billing.phone}
                id={id}
              />
            </motion.div>
          )}
          {selectedTab === "facturation" && (
            <motion.div
              key={`layout-facturation`}
              variants={tabAnimationTop}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-1"
              role="tabpanel"
              tabIndex={selectedTab === "facturation" ? 0 : -1}
              aria-labelledby="tab-1"
            >
              <Invoicing />
            </motion.div>
          )}
          {selectedTab === "commande" && (
            <motion.div
              key={`layout-commande`}
              variants={tabAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              id="panel-1"
              role="tabpanel"
              tabIndex={selectedTab === "commande" ? 0 : -1}
              aria-labelledby="tab-1"
            >
              <OrdersItem orders={userOrders} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Account;

export const getStaticProps = async () => {
  const userInfo = await getUsers().catch((error) => console.error(error));
  const ordersInfo = await getOrders().catch((error) => console.error(error));

  if (!userInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users: userInfo.data,
      orders: ordersInfo.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
