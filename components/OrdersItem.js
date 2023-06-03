import React, { useContext } from "react";
import { ReRenderContext } from "../utils/useProvider";
import Button from "./Button";
import Icon from "./Icon";

const OrdersItem = ({ orders }) => {
  const width = useContext(ReRenderContext);
  const backendUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {orders.length > 0 ? (
        <div className="pb-44">
          {orders.map((order) => {
            let status = "";
            switch (order.status) {
              case "failed":
                status = "échoué";
                break;
              case "refunded":
                status = "remboursé";
                break;
              case "processing":
                status = "en cours";
                break;
              case "on-hold":
                status = "en attente";
                break;
              case "completed":
                status = "terminé";
                break;
              case "cancelled":
                status = "annulé";
                break;
              default:
                break;
            }
            return (
              <div
                className="flex flex-col sm:flex-row md:items-center justify-between border-b border-grey-lighter py-8"
                key={order.id}
              >
                <div className="flex justify-between w-full">
                  <div className="">
                    <div className="capitalize">
                      n°{order.number} -{" "}
                      {new Date(order.date_created).toLocaleDateString(
                        "fr-FR",
                        dateOptions
                      )}
                    </div>
                    <div className="text-grey-darker text-sm capitalize">
                      {status} -{" "}
                      {new Date(order.date_modified).toLocaleDateString(
                        "fr-FR",
                        dateOptions
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:flex-row md:items-center gap-6">
                    <div className="">
                      <div className="text-right">{order.total} €</div>
                      <div className="text-sm py-1 px-3 bg-halftone text-foreground rounded-[64px] ">
                        À domicile - {order.shipping_lines[0].method_title}
                      </div>
                    </div>
                    {width > 768 && (
                      <>
                        <a
                          href={`${backendUrl}/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=${order.id}&access_key=5f1380d6d4`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-accent"
                        >
                          <Icon icon="invoice" size={24} /> Voir la facture
                        </a>
                        {/* <a
                            href={`${backendUrl}/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=${order.id}&access_key=5f1380d6d4`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="rounded-full bg-halftone w-14 h-14 flex items-center justify-center">
                              <Icon icon="download" size={24} />
                            </Button>
                          </a> */}
                      </>
                    )}
                  </div>
                </div>
                {width < 768 && (
                  <div className="flex gap-4 pt-8">
                    <a
                      href={`${backendUrl}/wp-admin/admin-ajax.php?action=generate_wpo_wcpdf&document_type=invoice&order_ids=${order.id}&access_key=5f1380d6d4`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-accent flex-auto"
                    >
                      <Icon icon="invoice" size={24} /> Voir la facture
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <h2>Vous n&apos;avez pas encore passé de commande</h2>
        </div>
      )}
    </>
  );
};

export default OrdersItem;
