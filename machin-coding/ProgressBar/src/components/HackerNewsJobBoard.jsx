import React, { useEffect, useState } from "react";
const PAGE_SIZE = 6;
export const HackerNewsJobBoard = () => {
  const [page, setPage] = useState(0);
  const [jobIds, setJobIds] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [fetchingJobDetails, setFetchingJobDetails] = useState(false);

  async function getJobIds(currPage) {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    const jobs = await response.json();
    setJobIds(jobs);
    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return jobs.slice(start, end);
  }
  async function getJobs(currPage) {
    const jobIdsForPage = await getJobIds(currPage);
    setFetchingJobDetails(true);
    const jobsForPage = await Promise.all(
      jobIdsForPage?.map((jobId) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
          (res) => res.json()
        )
      )
    );
    setFetchingJobDetails(false);
    const combinedJobs = [...jobs, ...jobsForPage];
    setJobs(combinedJobs);
  }
  useEffect(() => {
    getJobs(page);
  }, [page]);
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  console.log("jobs", jobs);
  return (
    <>
      <div className="app">
        <h1 className="title">Hacker News Jobs Board</h1>
        {jobIds == null && <p className="loading">Loading...</p>}
        <div className="jobs">
          {jobs?.map((data, index) => (
            <React.Fragment key={index}>
              <JobCard {...data} />
            </React.Fragment>
          ))}
        </div>

        {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
          <button className="load-more-button" onClick={handleLoadMore}>
            {fetchingJobDetails ? "Loading..." : "Load more jobs"}
          </button>
        )}
      </div>
    </>
  );
};

const JobCard = ({ url, by, time, title }) => {
  return (
    <>
      <div className="post" role="listitem">
        <h2 className="post__title">
          {url ? (
            <a href={url} target="_blank" rel="noopener">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="post__metadata">
          By {by} &middot; {new Date(time * 1000).toLocaleString()}
        </p>
      </div>
    </>
  );
};
