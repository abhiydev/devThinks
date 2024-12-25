import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

// Utility function to truncate the subject
const truncateSubject = (text, maxLength = 25) => 
  text && text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

const EmailBody = ({
  from,
  email,
  subject,
  timeStamp,
  onClose,
  onToggleFavorite,
  favorite,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bodyContent, setBodyContent] = useState("");

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://flipkart-email-mock.vercel.app/?id=${email.id}`
        );
        setBodyContent(response.data.body);
      } catch (error) {
        console.error("Error fetching email body:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmail();
  }, [email.id]);

  return (
    <div className="bg-white shadow-lg rounded-lg w-full h-fit max-w-6xl mx-auto p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="bg-pink-500 min-h-12 min-w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center text-white font-semibold">
            {from.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <p className="font-semibold text-lg sm:text-xl text-gray-800">
              {truncateSubject(subject, 25)}
            </p>
            <p className="text-sm text-gray-500">{timeStamp}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className={`px-4 py-1 rounded-2xl font-semibold ${
            favorite ? "bg-gray-500 text-white" : "bg-pink-500 text-white"
          }`}
        >
          {favorite ? "Unmark as favorite" : "Mark as favorite"}
        </button>
      </div>
      <div className="mt-4 sm:mt-8 text-gray-700 text-base sm:text-lg">
        {isLoading ? <Loading /> : <div dangerouslySetInnerHTML={{ __html: bodyContent }} />}
      </div>
    </div>
  );
};

export default EmailBody;
