import React from 'react'
import Card from './components/card'

const App = ()  => {
  const jobOpenings = [
    {
       id: 1,
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Bangalore"
    },
     {
    id: 2,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "React Developer Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$22/hr",
    location: "Hyderabad"
  },
  {
    id: 3,
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hr",
    location: "Noida"
  },
  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "Today",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Mumbai"
  },
  {
    id: 5,
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "5 days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$36/hr",
    location: "Pune"
  },
  {
    id: 6,
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$25/hr",
    location: "Gurgaon"
  },
  {
    id: 7,
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Chennai"
  },
  {
    id: 8,
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "Today",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore"
  },
  {
    id: 9,
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "React JS Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Delhi"
  },
  {
    id: 10,
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "6 days ago",
    post: "Frontend Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$34/hr",
    location: "Hyderabad"
  }
  ];
    return (
    <div className="parent">
      {jobOpenings.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;
