import React, { useState } from "react";
import Button from "./Button";
import StarRating from "./StarRating";
import { useSession } from "next-auth/react";

const ReviewForm = ({ id, username }) => {
  const session = useSession();
  const [data, setData] = useState({
    reviewer: session?.data?.user?.name,
    reviewerEmail: session?.data?.user?.email,
    review: ""
  });
  console.log(session);
  const handleSubmit = () => {
    console.log('ok');
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <input
        className="input-style"
        type="text"
        name="reviewer"
        id="reviewer"
        placeholder="Pseudonyme"
        value={session ? session?.data?.user?.name : ""}
      />
      <input
        className="input-style"
        type="email"
        name="reviewerEmail"
        id="reviewerEmail"
        placeholder="Email"
        value={session ? session?.data?.user?.email : ""}
      />
      <textarea
        className="textarea h-[112px]"
        name="review"
        id="review"
        placeholder="Commentaire"
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          Note <StarRating />
        </div>
        <Button className="button-accent">Envoyer à Charline</Button>
      </div>
    </form>
  );
};

export default ReviewForm;
