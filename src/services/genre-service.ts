import { useEffect, useState } from "react";
import apiClient from "./api-client";
import { CanceledError } from "axios";
import Genre from "../models/Genre";

function GenreService() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error };
}
export default GenreService;
