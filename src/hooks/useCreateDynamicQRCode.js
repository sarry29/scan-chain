import { useEffect, useState } from "react";

async function useCreateDynamicQRCode(qrPassData) {
  const [qrResponseData, setQRResponseData] = useState(null);
  const [error, setError] = useState(null);
  const UNIQODE_BASE_URL = "https://api.uniqode.com/api/2.0";
  // using demo@uniqode.com
  const UNIQODE_TOKEN_API = "08ddda7aabcbecfa54b29f6d032d7d289eb241b5";
  const UNIQODE_ORG_ID = "1697";

  useEffect(() => {
    if (!qrPassData) return; // Exit if qrPassData is not provided.

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${UNIQODE_TOKEN_API}`,
      },
      body: JSON.stringify({
        name: "Custom URL",
        organization: UNIQODE_ORG_ID,
        qr_type: 2,
        campaign: {
          content_type: 1,
          custom_url: qrPassData.url,
        },
        location_enabled: false,
        attributes: {
          color: qrPassData.colorOne,
          colorDark: qrPassData.colorTwo,
          margin: 80,
          isVCard: false,
          frameText: "UNIQODE",
          logoImage: "",
          logoScale: 0.1992,
          frameColor: qrPassData.colorTwo,
          frameStyle: "banner-bottom",
          logoMargin: 10,
          dataPattern: "square",
          eyeBallShape: "circle",
          gradientType: "none",
          eyeFrameColor: qrPassData.colorThree,
          eyeFrameShape: "rounded",
        },
      }),
    };

    const createQRCode = async () => {
      try {
        const response = await fetch(`${UNIQODE_BASE_URL}/qrcodes/`, options);
        const data = await response.json();
        setQRResponseData(data);
      } catch (err) {
        console.error("Error creating QR code:", err);
        setError(err);
      }
    };

    createQRCode();
  }, [qrPassData]);

  console.log("Generated QR :", qrResponseData);
  return { qrResponseData, error };
}

export default useCreateDynamicQRCode;