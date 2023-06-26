import { useEffect, useState } from "react";
import apiClient from "./api-client";
import { Platform, PlatformList } from "../models/Platform";
import { CanceledError } from "axios";

function PlatformService() {
  const [platforms, setPlatform] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<PlatformList>("/platforms/lists/parents", { signal: controller.signal })
      .then((res) => setPlatform(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { platforms, error };
}

export default PlatformService;
