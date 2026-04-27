// src/components/careers/JobList.jsx
import Button from '../shared/Buttons';

const jobsData = [
  { id: 1, title: 'General Manager', location: 'Jakarta, Indonesia' },
  { id: 2, title: 'UI/UX Designer', location: 'Yokohama, Japan' },
  { id: 3, title: 'Blog Content Copywriter', location: 'New York, United States' },
  { id: 4, title: 'Graphic Designer', location: 'New York, United States' },
  { id: 5, title: 'Fleet Supervisor', location: 'Jakarta, Indonesia' },
  { id: 6, title: 'UX Analyst', location: 'London, United Kingdom' },
];

export default function JobList() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24">
      <div className="flex flex-col gap-6">
        {jobsData.map(job => (
          <div 
            key={job.id} 
            className="bg-snow px-8 py-8 md:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0"
          >
            <div>
              <h4 className="text-[24px] leading-[28px] mb-2">{job.title}</h4>
              <p className="text-[15px] leading-[25px] text-dim-grey">{job.location}</p>
            </div>
            <Button className="w-full md:w-auto">Apply</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
