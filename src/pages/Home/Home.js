import { useState, useEffect } from "react";
// CSS
import styles from "./Home.module.css";

// hooks
import { useDocuments } from "../../hooks/useDocuments";
import { useAuthContext } from "../../hooks/useAuthContext";

// import Component

import ReviewList from "../Review/ReviewList";
import Search from "../Search/Search";

export default function Home() {
  const { documents, error } = useDocuments("reviews");
  const { term1, setTerm1 } = useAuthContext();

  return (
    <div className={styles["home"]}>
      {term1 != "" && documents && (
        <ReviewList
          reviews={documents.filter((doc) =>
            String(doc.restaurant).toLowerCase().includes(term1.toLowerCase())
          )}
        />
      )}
      {term1 != "" && documents && (
        <ReviewList
          reviews={documents.filter((doc) =>
            String(doc.location).toLowerCase().includes(term1.toLowerCase())
          )}
        />
      )}
    
      {term1 == "" && documents && <ReviewList reviews={documents} />}
    </div>
  );
}
