import React from "react";
import Button from "./Button";
import Icon from "./Icon";


const Invoicing = ({firstNameB,lastNameB,cityB,addressB,addressComplB,companyB,countryB,phoneB, postcodeB,stateB,firstNameI,lastNameI,cityI,addressI,addressComplI,companyI,countryI,phoneI,postcodeI,stateI,emailI,
}) => {
  return (
    <div className="pb-44 grid md:grid-cols-2 gap-12">
      <div className="">
        <h4 className="pb-8">Livraison</h4>
        <div className="flex flex-col gap-8">
          <div className="bg-grey-lightest p-8 rounded-[48px]">
            <Button className="flex items-center justify-between w-full pb-4">
              Adresse de livraison <Icon icon="navArrowUp" size={24} />
            </Button>
            <p>
              {firstNameB ? firstNameB : "Prénom"}{" "}
              {lastNameB ? lastNameB : "Nom"}
            </p>
            {companyB && <p>{companyB}</p>}
            <p>{addressB ? addressB : "adresse"}</p>
            {addressComplB && <p>{addressComplB}</p>}
            {postcodeB ||
              cityB ||
              (countryB && (
                <p>
                  {postcodeB}, {cityB}, {countryB}
                </p>
              ))}
            {/* <div className="flex items-center justify-between">
              <Button className="flex items-center gap-4 py-2 px-4 text-foreground bg-halftone rounded-[64px]">
                <Icon icon="bookmarkChecked" size={24} /> Adresse par défaut
              </Button>
              <div className="flex items-center gap-7">
                <Button>
                  <Icon icon="bookmarkRemove" size={24} />
                </Button>
                <Button>
                  <Icon icon="trash" size={24} />
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="pb-8">Facturation</h4>
        <div className=" bg-grey-lightest rounded-[48px] p-8">
          <div className="flex items-center justify-between pb-14">
            <Button>Email - Téléphone</Button>
            <Button>
              <Icon icon="navArrowUp" size={24} />
            </Button>
          </div>
          <form>
            <input
              className="input-style bg-transparent mb-14"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={emailI}
            />
            <input
              className="input-style bg-transparent mb-14"
              type="tel"
              name="tel"
              id="tel"
              placeholder="Téléphone"
              value={phoneI}
            />
            <div className="flex items-center justify-between">
              <Button className="flex items-center justify-between">
                Adresse
              </Button>
              <Button>
                <Icon icon="navArrowUp" size={24} />
              </Button>
            </div>
            <div className="flex flex-col gap-6 pb-8">
              {addressI && (
                <label htmlFor="address1">
                  <div className="flex items-center gap-2 pb-2">
                    <input
                      className="text-accent focus:ring-accent"
                      type="radio"
                      name="address"
                      id="address1"
                      defaultChecked
                    />
                    Adresse de facturation
                  </div>
                  <span className="text-sm text-grey-darkest">
                    {addressI}
                    {addressComplI && +", " + addressComplI}, {postcodeI},{" "}
                    {cityI}
                  </span>
                </label>
              )}
              {/* <label className="flex items-center gap-2" htmlFor="otherAddress">
                <input
                  className={`text-accent focus:ring-accent`}
                  type="radio"
                  name="address"
                  id="otherAddress"
                />
                <span>Indiquer une autre adresse</span>
              </label> */}
            </div>
            <Button type="button" className="button-accent">
              <Icon icon="save" size={24} />
              Enregister
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Invoicing;
