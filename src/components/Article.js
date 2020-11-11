import React, { useState } from "react";

export default function Article(props) {
  const [isOpen, SetIsOpen] = useState(true);

  const { article } = props;
  const content = isOpen && (
    <section className="card-text">{article.content}</section>
  );
  return (
    <div className="card mx-auto" style={{ width: "50%" }}>
      <div className="card-header">
        <h2>
          {article.title}
          <button
            onClick={() => SetIsOpen(!isOpen)}
            className="btn btn-primary btn-lg float-right"
          >
            Toggle
          </button>
        </h2>
      </div>
      <div className="card-body">
        <section className="card-subtitle text-muted">
          {new Date(article.date).toDateString()}
        </section>
        {content}
      </div>
    </div>
  );
}
