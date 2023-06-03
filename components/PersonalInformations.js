import React, { useState, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { updateCustomer } from "../utils/customApi";
import axios from "axios";


const PersonalInformations = ({ firstName, name, pseudo, email, tel, id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL;
  const [data, setData] = useState({
    first_name: firstName,
    last_name: name,
    username: pseudo,
    email: email,
    billing: { phone: tel },
  });

  useEffect(() => {
    setData({
      ...data,
      first_name: firstName,
      last_name: name,
      username: pseudo,
      email: email,
      billing: { phone: tel },
    });
  }, [firstName, name, pseudo, email, tel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/api/update-customer/${id}`, data)
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid sm:grid-cols-2 gap-12 pb-44">
      <div>
        <h4 className="pb-8">Identifiant de connexion</h4>
        <div className="bg-grey-lightest rounded-[48px] p-8">
          <Button className="flex items-center justify-between w-full pb-14">
            Informations personnelles
            <Icon icon="navArrowUp" size={24} />
          </Button>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-14"
          >
            <input
              className="input-style bg-transparent"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              value={data.first_name}
              onChange={(e) => setData({ ...data, first_name: e.target.value })}
            />
            <input
              className="input-style bg-transparent"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom"
              value={data.last_name}
              onChange={(e) => setData({ ...data, last_name: e.target.value })}
            />
            <input
              className="input-style bg-transparent"
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pseudonyme"
              defaultValue={pseudo}
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              className="input-style bg-transparent"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              className="input-style bg-transparent"
              type="tel"
              name="tel"
              id="tel"
              placeholder="Téléphone"
              value={data.billing.phone}
              onChange={(e) =>
                setData({ ...data, billing: { phone: e.target.value } })
              }
            />
            <Button className="button-accent">
              <Icon icon="save" size={24} />
              Enregister
            </Button>
          </form>
        </div>
      </div>
      <div className="">
        <div>
          <h4 className="pb-8">Mot de passe</h4>
        </div>
        <div className="bg-grey-lightest rounded-[48px] p-8">
          <Button className="flex items-center justify-between w-full pb-14">
            Mot de passe <Icon icon="navArrowUp" size={24} />
          </Button>
          <form className="flex flex-col items-start gap-14">
            <input
              className="input-style bg-transparent"
              type="password"
              name="current-password"
              id="current-password"
              placeholder="Mot de passe actuel"
            />
            <input
              className="input-style bg-transparent"
              type="password"
              name="new-password"
              id="new-password"
              placeholder="Nouveau mot de passe"
            />
            <input
              className="input-style bg-transparent"
              type="password"
              name="password-confirmation"
              id="password-confirmation"
              placeholder="Confirmation du nouveau mot de passe"
            />
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

export default PersonalInformations;
