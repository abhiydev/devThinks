'use client';
import React, { useState } from "react";

const EmailCard = ({
    from,
    email,
    subject,
    content,
    timeStamp,
    favorite,
    onToggleFavorite,
    onMouseEnter,
    onMouseLeave,
    isHovered,
    isEmailOpen,
    onToggleOpen,
}) => {

    return (
        <div
            onClick={onToggleOpen}
            className={`p-4 border text-xs sm:text-base rounded-lg m-2 sm:m-4 cursor-pointer transition-all duration-200 ease-in-out ${
                isEmailOpen ? "bg-white border-gray-950" : "border-gray-300 bg-gray-50 hover:bg-white transform"
            } ${isHovered ? "shadow-lg transform" : ""}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-start sm:gap-8">
                {/* Avatar */}
                <div className="bg-pink-500 h-14 w-14 flex justify-center items-center rounded-full text-white font-semibold text-xl">
                    {from.charAt(0).toUpperCase()}
                </div>

                {/* Email Info */}
                <div className="flex-grow text-center sm:text-left">
                    <p className="font-medium text-gray-800">
                        <span className="text-gray-600">From:</span> {from} {`<${email}>`}
                    </p>
                    <p className="font-medium text-gray-800 truncate">
                        <span className="text-gray-600">Subject:</span> {subject}
                    </p>

                    {/* Content Preview */}
                    <p className="pt-4 pb-4 text-gray-700">
                        {content}
                    </p>

                    {/* Footer with timestamp and favorite button */}
                    <div className="flex gap-4 items-center mt-2">
                        <p className="text-gray-500 text-sm">{timeStamp}</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleFavorite();
                            }}
                            className={`text-pink-500 font-medium hover:text-pink-600 transition-colors ${
                                favorite ? "font-bold text-pink-700" : ""
                            }`}
                        >
                            {favorite ? "Unfavorite" : "Favorite"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailCard;
