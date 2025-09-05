"use client"
import Tag from "../atoms/Tag";
import { useState } from "react";
import { Share2, Flag, Instagram } from "lucide-react";
import BackButton from "../molecules/BackButton";

export default function SpeakerDetail({ speaker }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-60 bg-orange-600 rounded-bl-[50px] z-0" />

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-28 p-6">
                <div className="w-full max-w-6xl relative">
                <div className="mb-6">
                    <BackButton />
                </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">

                        <div className="flex flex-col gap-4 md:w-[250px] w-full shrink-0">
                            <div className="rounded-2xl shadow-md overflow-hidden">
                                {imgError || !speaker.image ? (
                                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                                        No image
                                    </div>
                                ) : (
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-80 object-cover"
                                        onError={() => setImgError(true)}
                                    />
                                )}
                            </div>

                            <div className="flex justify-center mt-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                        <Instagram className="text-pink-600" size={20} />
                                    </div>

                                    <div className="flex flex-col leading-tight">
                                        <span className="text-lg font-medium text-gray-800">{speaker.name}</span>
                                        <p className="text-sm text-gray-600">{speaker.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 md:flex-1 md:max-w-[750px] w-full relative">
                            <button className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-50">
                                <Share2 size={18} />
                                <span className="hidden sm:inline text-sm">Share</span>
                            </button>

                            <div className="space-y-6">
                                <div>
                                    <span className="uppercase text-sm tracking-wide text-gray-500">
                                        Speaker
                                    </span>
                                </div>
                                <div>
                                    <h1 className="text-6xl font-bold tracking-tight">{speaker.name}</h1>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-xl text-gray-800 font-medium">{speaker.role}</p>
                                    <p className="text-md text-gray-500">{speaker.company}</p>
                                </div>

                                {speaker.tags?.length > 0 && (
                                    <div className="flex gap-2 flex-wrap">
                                        {speaker.tags.map((tag, idx) => (
                                            <Tag key={idx} label={tag} variant="success" />
                                        ))}
                                    </div>
                                )}

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {speaker.description}
                                </p>

                                {speaker.country && (
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <Flag size={18} className="text-gray-500" />
                                        <span>{speaker.country}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}