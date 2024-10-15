import { useEffect, useState } from "react";

function useFetchQRImage(fetchQRCodeId) {
  const [qrCodeDownloadData, setQrCodeDownloadData] = useState(null);
  const [errorDownloadData, setErrorDownloadData] = useState(null);
  const UNIQODE_BASE_URL = "https://api.uniqode.com/api/2.0";
  // using demo@uniqode.com
  const UNIQODE_TOKEN_API = "08ddda7aabcbecfa54b29f6d032d7d289eb241b5";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${UNIQODE_TOKEN_API}`,
    }
  };

  useEffect(() => {
    if (!fetchQRCodeId || fetchQRCodeId === 0) return; // Skip if ID is invalid

    const fetchQRCodeData = async () => {
      try {
        const response = await fetch(`${UNIQODE_BASE_URL}/qrcodes/${fetchQRCodeId}/download/?size=1024&error_correction_level=5&canvas_type=png`, options);
        const data = await response.json();
        setQrCodeDownloadData(data);
      } catch (error) {
        setErrorDownloadData(error);
      }
    };

    fetchQRCodeData();
  }, [fetchQRCodeId]); // Refetch when ID changes

  return { qrCodeDownloadData, errorDownloadData };
}


export default useFetchQRImage;