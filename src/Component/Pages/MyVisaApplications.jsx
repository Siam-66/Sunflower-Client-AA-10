import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyVisaApplicationCard from "./Cards/MyVisaApplicationCard ";

const MyVisaApplications = () => {
    const loadedApplications = useLoaderData();
    const [application, setApplication] = useState(loadedApplications);
    return (
        <div>
            <h1 className="text-center text-3xl bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent font-bold">
                My Visa applications
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25rem] p-4">
                {application.map(applications => (
                    <MyVisaApplicationCard
                        key={applications._id}
                        applications={applications}
                        application={application}
                        setApplication={setApplication}
                    />
                ))}
            </div>
        
        </div>
    );
};

export default MyVisaApplications;