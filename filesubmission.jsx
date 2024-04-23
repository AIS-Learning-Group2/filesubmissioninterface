import React from 'react';
import './style.css';

const SubmissionFolders = () => {
  const currentUrl = window.location.origin;

  return (
    <div className="submission-folders-container">
      <h1 className="main-heading">Submission Folders</h1>
      <div className="folder-links-container">
        <a
          href={`http://localhost/New%20folder%20(3)/OL%20Mathematics/olmaths.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          O/L Mathematics
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/OL%20Science/olscience.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          O/L Science
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/OL%20ICT/olict.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          O/L ICT
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/AL%20Mathematics%20Stream/almathematics.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          A/L Mathematics Stream
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/AL%20Biology/albiology.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          A/L Biology
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/AL%20ICT/alict.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
       >
          A/L ICT
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/Botnical%20Sciences/botny.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Botanical Science
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/Pure%20Mathematics/puremaths.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pure Mathematics
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/Computer%20Science/computersc.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computer Science
        </a>
        <a
          href={`http://localhost/New%20folder%20(3)/Shishyathwaya/shishathvy.html`}
          className="folder-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ශිෂ්‍යත්වය
        </a>
      </div>
    </div>
  );
};

export default SubmissionFolders;