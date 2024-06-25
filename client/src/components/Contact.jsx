import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOwnerData = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setOwner(data);
      } catch (error) {}
    };

    fetchOwnerData();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {owner && (
        <div className="flex flex-col gap-3">
          <p>
            Contact <span className="font-semibold">{owner.username} </span>for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            className="w-full border p-3 rounded-lg "
            placeholder="Enter your message here"
            name="message"
            id="message"
            rows={2}
            value={message}
            onChange={onChange}
          ></textarea>
          <Link
            to={`mailto:${owner.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
