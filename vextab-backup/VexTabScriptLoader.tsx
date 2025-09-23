"use client";

import React, { useEffect, useState } from "react";

const VexTabScriptLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to load the VexTab script
    const loadVexTabScript = () => {
      // Check if already loaded
      if (typeof window !== "undefined" && window.VexTabDiv && window.VexTabDiv.autoRender) {
        setTimeout(() => {
          if (window.VexTabDiv && window.VexTabDiv.autoRender) {
            window.VexTabDiv.autoRender();
            setIsLoading(false);
          }
        }, 0);
        return;
      }

      // Add VEXTAB_USE_SVG flag first
      const svgConfig = document.createElement("script");
      svgConfig.textContent = "VEXTAB_USE_SVG = true;";
      document.head.appendChild(svgConfig);

      // Load the actual script
      const script = document.createElement("script");
      script.src = "/vextab-div.js";
      script.async = true;
      script.onload = () => {



      };

      document.head.appendChild(script);

    };
    loadVexTabScript();
    // Clean up function
    return () => { };
  }, [isLoading]);

  return (
    <>

    </>
  );
};

export default VexTabScriptLoader;
