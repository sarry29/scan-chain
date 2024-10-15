import style from "./style.module.scss";
import { Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

export default function QRGenerator() {
  const [isModalActive, setModalActive] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const [previewImage, setPreviewImage] = useState(
    "https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"
  );
  const [previewImage2, setPreviewImage2] = useState(
    "https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"
  );
  const [previewImage3, setPreviewImage3] = useState(
    "https://static.uniqode.com/assets/img/qrcg-img/qrcg-sample.png"
  );

  const [qrPassData, setQrPassData] = useState(null);
  const [qrPassData2, setQrPassData2] = useState(null);
  const [qrPassData3, setQrPassData3] = useState(null);
  const [fetchQRCodeId, setFetchQRCodeId] = useState(null);
  const [fetchQRCodeId2, setFetchQRCodeId2] = useState(null);
  const [fetchQRCodeId3, setFetchQRCodeId3] = useState(null);
  const [qrCodeAttributeData, setQRCodeAttributeData] = useState(null);

  const [aiPromptArea, setAIPromptArea] = useState("");
  const [aiDesignationPromptArea, setAIDesignationPromptArea] = useState("");
  const [isGeneratedButtonClick, setIsGeneratedButton] = useState(false);

  const getColorAttributeData = async (promptArea, promptDesignation) => {
    const DUMMY_BASE =
      "https://mocki.io/v1/df80b8b8-f12f-4df4-8e66-8c4cd988fa37";
    try {
      // const response = await fetch(`${OPENAI_BASE}`, options);
      const response = await fetch(`${DUMMY_BASE}`);
      const res = await response.json();
      setQRCodeAttributeData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getQRCodeGeneratedObject = async (qrPassData, setData) => {
    if (qrPassData == null) return;
    const UNIQODE_BASE_URL = "https://api.uniqode.com/api/2.0";
    // using demo@uniqode.com
    const UNIQODE_TOKEN_API = "08ddda7aabcbecfa54b29f6d032d7d289eb241b5";
    const UNIQODE_ORG_ID = "1697";
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
          color: qrPassData.color,
          colorDark: qrPassData.colorDark,
          margin: 80,
          isVCard: false,
          dotScale: 1,
          frameText: "SCAN ME",
          logoImage: "",
          logoScale: 0.19949999999999998,
          logoWidth: 0,
          colorLight: qrPassData.colorLight,
          frameColor: qrPassData.frameColor,
          frameStyle: qrPassData.frameStyle,
          logoHeight: 0,
          logoMargin: 10,
          dataPattern: qrPassData.dataPattern,
          rectangular: false,
          eyeBallColor: qrPassData.eyeBallColor,
          eyeBallShape: qrPassData.eyeBallShape,
          gradientType: "radial",
          eyeFrameColor: qrPassData.eyeFrameColor,
          eyeFrameShape: qrPassData.eyeFrameShape,
          frameTextColor: qrPassData.frameTextColor,
          logoBackground: true,
          backgroundColor: "#ffffff",
          backgroundImage: "",
        },
      }),
    };
    try {
      const response = await fetch(`${UNIQODE_BASE_URL}/qrcodes/`, options);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error("Error creating QR code:", err);
    }
  };

  const getFetchQRImage = async (fetchQRCodeData, setFetchQRCodeData) => {
    if (fetchQRCodeData == null) return;

    const UNIQODE_BASE_URL = "https://api.uniqode.com/api/2.0";
    // using demo@uniqode.com
    const UNIQODE_TOKEN_API = "08ddda7aabcbecfa54b29f6d032d7d289eb241b5";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${UNIQODE_TOKEN_API}`,
      },
    };

    try {
      const response = await fetch(
        `${UNIQODE_BASE_URL}/qrcodes/${fetchQRCodeData}/download/?size=1024&error_correction_level=5&canvas_type=png`,
        options
      );
      const data = await response.json();
      console.log("inside download", data);
      setFetchQRCodeData(data);
    } catch (error) {
      console.error("ERROR ON FETCHING QR CODE USING ID", error);
    }
  };
  useEffect(() => {
    if (!isGeneratedButtonClick) {
      return;
    }
    getColorAttributeData(aiPromptArea, aiDesignationPromptArea);
  }, [isGeneratedButtonClick]);

  // Helper function to get a random element from an array
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  useEffect(() => {
    if (!qrCodeAttributeData) {
      return;
    }
    if (!walletAddress) {
      console.error("Enter Wallet address");
      return;
    }
    const colors = qrCodeAttributeData["body"].split(" ");
    const baseUrl = `${window.location.origin}/copy-to-clipboard?wallet-address=${walletAddress}`;
    const dataPattern = [
      "square",
      "circle",
      "smooth-round",
      "kite",
      "thin-square",
      "left-diamond",
      "right-diamond",
      "smooth-sharp",
    ];
    const eyeBallShape = [
      "rounded",
      "square",
      "circle",
      "left-diamond",
      "right-diamond",
      "left-leaf",
      "right-leaf",
    ];
    const eyeFrameShape = [
      "rounded",
      "square",
      "left-leaf",
      "right-leaf",
      "circle",
    ];
    const frameStyle = [
      "balloon-bottom",
      "box-bottom",
      "banner-top",
      "box-top",
      "balloon-top",
      "circular",
      "text-only",
      "focus",
    ];
    for (let i = 0; i < 3; i++) {
      const QRCodeData = {
        url: baseUrl,
        color: getRandomElement(colors),
        colorDark: getRandomElement(colors),
        colorLight: getRandomElement(colors),
        frameColor: getRandomElement(colors),
        eyeBallColor: getRandomElement(colors),
        eyeFrameColor: getRandomElement(colors),
        frameTextColor: getRandomElement(colors),
        dataPattern: getRandomElement(dataPattern),
        eyeBallShape: getRandomElement(eyeBallShape),
        eyeFrameShape: getRandomElement(eyeFrameShape),
        frameStyle: getRandomElement(frameStyle),
      };

      // Use the appropriate setter based on the index
      if (i === 0) getQRCodeGeneratedObject(QRCodeData, setQrPassData);
      if (i === 1) getQRCodeGeneratedObject(QRCodeData, setQrPassData2);
      if (i === 2) getQRCodeGeneratedObject(QRCodeData, setQrPassData3);
    }
    setIsGeneratedButton(false);
  }, [qrCodeAttributeData]);

  useEffect(() => {
    if (qrPassData == null) return;
    const generatedQRCodeData = qrPassData || null;
    if (generatedQRCodeData) {
      console.log("QR Code ID:", generatedQRCodeData.id);
      getFetchQRImage(generatedQRCodeData.id, setFetchQRCodeId);
    }
  }, [qrPassData]);

  useEffect(() => {
    if (qrPassData2 == null) return;
    // Access the response data and extract QR code URL once it's available
    const generatedQRCodeData = qrPassData2 || null;

    if (generatedQRCodeData !== null) {
      console.log("QR Code 2 ID:", generatedQRCodeData.id);
      getFetchQRImage(generatedQRCodeData.id, setFetchQRCodeId2);
    }
  }, [qrPassData2]);

  useEffect(() => {
    if (qrPassData3 == null) return;
    const generatedQRCodeData = qrPassData3 || null;

    if (generatedQRCodeData !== null) {
      console.log("QR Code 2 ID:", generatedQRCodeData.id);
      getFetchQRImage(generatedQRCodeData.id, setFetchQRCodeId3);
    }
  }, [qrPassData3]);

  // useEffect(() => {
  //   if (errorDownloadData) {
  //     console.error("Error fetching QR code download data:", errorDownloadData);
  //   }
  // }, [errorDownloadData]);

  useEffect(() => {
    if (fetchQRCodeId) {
      console.log("QR DOWNLOAD 1 - ", fetchQRCodeId);
      setPreviewImage(fetchQRCodeId.urls.png);
    } else {
      console.error("QR Download Data is still null.");
    }
  }, [fetchQRCodeId]);

  useEffect(() => {
    if (fetchQRCodeId2) {
      console.log("QR DOWNLOAD 2 - ", fetchQRCodeId2);
      setPreviewImage2(fetchQRCodeId2.urls.png);
    } else {
      console.error("QR Download Data is still null.");
    }
  }, [fetchQRCodeId2]);

  useEffect(() => {
    if (fetchQRCodeId3) {
      console.log("QR DOWNLOAD 3 - ", fetchQRCodeId3);
      setPreviewImage3(fetchQRCodeId3.urls.png);
    } else {
      console.error("QR Download Data is still null.");
    }
  }, [fetchQRCodeId3]);

  const PromptArea = () => {
    const [innerWalletAddress, setInnerWalletAddress] = useState(walletAddress);
    const [innerAIPromptArea, setInnerAIPromptArea] = useState(aiPromptArea);
    const [innerAIDesignationPromptArea, setInnerAIDesignationPromptArea] =
      useState(aiDesignationPromptArea);

    const handleScanModal = () => {
      setModalActive(true);
    };

    const generateQRCode = (e, walletAddress) => {
      e.preventDefault();
      setWalletAddress(innerWalletAddress);
      if (!walletAddress || walletAddress == "" || walletAddress == "") {
        console.error("Wallet Address is Empty");
        alert("Wallet Address is Empty");
        return;
      }

      setIsGeneratedButton(true);
      setAIPromptArea(innerAIPromptArea);
      setAIDesignationPromptArea(innerAIDesignationPromptArea);
      // Window.location.href = qrCodeUrl;
    };

    const handleAIPromptArea = (val) => {
      // setAIPromptArea(val);
      setInnerAIPromptArea(val);
    };
    const handleAIDesignationPromptArea = (val) => {
      // setAIDesignationPromptArea(val);
      setInnerAIDesignationPromptArea(val);
    };

    return (
      <form className="mt-4">
        <div className="form-outline mb-4" data-mdb-input-init>
          <input
            placeholder="enter valid wallet address"
            type="text"
            id="wallet-address"
            className="form-control"
            value={innerWalletAddress}
            onChange={(e) => setInnerWalletAddress(e.target.value)}
          />
          <label
            className="form-label text-light d-flex mt-3"
            htmlFor="wallet-address"
          >
            <p className="me-3 my-auto">Add your Wallet Address</p>
            <div className="d-flex">
              <p className="text-light my-auto">
                OR (Scan or upload your wallet address image)
              </p>
              <button
                className="btn btn-primary ms-4"
                onClick={() => handleScanModal()}
              >
                CLICK HERE
              </button>
            </div>
          </label>
        </div>

        <div className="form-outline mb-4" data-mdb-input-init>
          <textarea
            placeholder="AI prompt for your personalized QR Code"
            className="form-control"
            value={innerAIPromptArea}
            onChange={(e) => handleAIPromptArea(e.target.value)}
          ></textarea>
        </div>

        <div className="form-outline mb-4" data-mdb-input-init>
          <textarea
            placeholder="What Do You Do?"
            className="form-control"
            value={innerAIDesignationPromptArea}
            onChange={(e) => handleAIDesignationPromptArea(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={(e) => generateQRCode(e, innerWalletAddress)}
        >
          Generate QR Code
        </button>
      </form>
    );
  };

  const ScanWalletModalArea = () => {
    const [isResultVideoHidden, setIsResultVideoHidden] = useState(true);
    const [scanResult, setScanResult] = useState("");
    const scanAgainBtn = useRef(null);

    const scanRef = useRef(null);
    const videoRef = useRef(null);
    const accessMessageRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
      if (isResultVideoHidden) {
        scanRef.current.classList.remove("d-none");
      } else {
        scanRef.current.classList.add("d-none");
      }
    }, [isResultVideoHidden]);

    const handleVideo = () => {
      useEffect(() => {
        const mediaDevices = navigator.mediaDevices;
        mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.addEventListener("loadedmetadata", () => {
                videoRef.current.play();
                accessMessageRef.current.classList.add("d-none"); // Hide access message
                scanRef.current.background = "transparent";
                requestAnimationFrame(scanQRCode);
              });
            }
          })
          .catch((error) => {
            accessMessageRef.current.classList.remove("d-none"); // Show access message if denied
            console.error("Error accessing camera: ", error);
          });
      }, []);

      const scanQRCode = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (
          video &&
          video.readyState === video.HAVE_ENOUGH_DATA &&
          isResultVideoHidden
        ) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, canvas.width, canvas.height);

          if (code) {
            setScanResult(code.data);
            setIsResultVideoHidden(false);
          }
        }
        requestAnimationFrame(scanQRCode);
      };
    };

    const handleScanAgain = () => {
      setScanResult("");
      setIsResultVideoHidden(true);
      handleVideo();
    };
    handleVideo();

    const canvasUploadRef = useRef(null);
    const [qrUploadResult, setQrUploadResult] = useState("");

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const img = new Image();
          img.src = e.target.result;

          img.onload = function () {
            // Set canvas dimensions to the image dimensions
            const canvasCurrent = canvasUploadRef.current;
            canvasCurrent.width = img.width;
            canvasCurrent.height = img.height;

            // Draw the image on the canvas
            const ctx = canvasCurrent.getContext("2d"); // Ensure context is lowercase
            ctx.drawImage(img, 0, 0);

            // Get image data from the canvas
            const imageData = ctx.getImageData(0, 0, img.width, img.height);

            // Detect QR code using jsQR
            const qrCode = jsQR(imageData.data, img.width, img.height);
            if (qrCode) {
              setQrUploadResult(`${qrCode.data}`);
            }
          };
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
      }
    };

    const setQRWalletData = () => {
      if (isResultVideoHidden) {
        if (qrUploadResult) {
          localStorage.setItem("walletAddress", qrUploadResult);
          setWalletAddress(qrUploadResult);
        }
      } else {
        if (scanResult) {
          localStorage.setItem("walletAddress", scanResult);
          setWalletAddress(scanResult);
        }
      }
      setModalActive(false);
    };

    return (
      <div className={`${style["bg-modal"]}`}>
        <div className="container bg-light p-4">
          <div className="d-flex justify-content-between">
            <p className="my-auto">Scan your QR Code</p>
            <button className="btn " onClick={() => setModalActive(false)}>
              x
            </button>
          </div>

          {/* VIDEO QR CODE */}
          <div>
            <div
              ref={scanRef}
              className="w-100 position-relative"
              style={{ background: "#F3F3F3" }}
            >
              <video ref={videoRef} className="w-100" autoPlay></video>
              <div
                ref={accessMessageRef}
                className="position-absolute top-50 start-50 translate-middle fw-400"
              >
                Please grant access to the webcam...
              </div>
            </div>
            <canvas
              ref={canvasRef}
              id="canvas"
              style={{ display: "none" }}
            ></canvas>
            <div
              id="scan-result"
              className={`${
                !isResultVideoHidden ? "d-block" : "d-none"
              } pb-11 text-center`}
            >
              <button
                ref={scanAgainBtn}
                className="scan-again btn btn-outline-primary mb-6"
                onClick={() => handleScanAgain()}
              >
                SCAN AGAIN
              </button>
              <p className="text-dark text-underline">{scanResult}</p>
            </div>
          </div>

          <div className="mt-3">
            <h4 className="text-center">OR</h4>
            <p>Upload an Image to Scan for QR Code</p>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={(event) => handleFileUpload(event)}
            />
            <label htmlFor="Upload QR Code"></label>
            <br />
            <canvas
              ref={canvasUploadRef}
              id="canvas-file"
              className="d-none"
            ></canvas>
            <p id="qrResult">
              {qrUploadResult
                ? `QR Code Data: ${qrUploadResult}`
                : "No Data Present"}
            </p>
          </div>
          <div className="w-100 text-center">
            <button
              className="btn btn-primary px-5"
              onClick={() => setQRWalletData()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  const QrGenerateArea = () => {
    const [previewItem, setPreviewItem] = useState({
      1: true,
      2: true,
      3: true,
    });
    const [selectQRCode,setSelectQRCode] = useState(false);
    useEffect(() => {
      console.log(previewItem);
    }, [previewItem]);

    const handlePreviewState = (previewItemNumber) => {
      setSelectQRCode(true);
      setPreviewItem(() => {
        return {
          1: previewItemNumber === 1,
          2: previewItemNumber === 2,
          3: previewItemNumber === 3,
        };
      });
    };

    const downloadImage = async () => {
      try {
        let imageUrl = '';
        console.log(previewItem);
        if(!previewItem[1] && !previewItem[2] && !previewItem[3]) {
          alert ('select any one qr code');
          return;
        }
        if(previewItem[1]) {
          imageUrl = previewImage
        }
        if(previewItem[2]) {
          imageUrl = previewImage2
        }
        if(previewItem[3]) {
          imageUrl = previewImage3
        }

        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ai-generated-qr-code.png'; // Specify the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url); // Clean up
      } catch (error) {
        console.error('Error downloading the image:', error);
      }
    }
    return (
      <>
        <h3 className="text-light text-center mb-3">QR CODE PREVIEW</h3>
        <p className="text-light text-center mb-5">Select any one to go with</p>
        <div className="m-auto text-center d-flex justify-content-between gap-2">
          <button
            className={`${style["preview-btn"]} ${style["btn-opacity"]} rounded-3 m-auto shadow p-5`}
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.33)",
              opacity: previewItem[1] ? "1" : "0",
            }}
            onClick={() => handlePreviewState(1)}
          >
            <img
              className="m-auto"
              src={previewImage}
              alt="preview"
              height={300}
              width={250}
            />
          </button>
          <button
            className={`${style["preview-btn"]} ${style["btn-opacity"]} rounded-3 m-auto shadow p-5`}
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.33)",
              opacity: previewItem[2] ? "1" : "0",
            }}
            onClick={() => handlePreviewState(2)}
          >
            <img
              className="m-auto"
              src={previewImage2}
              alt="preview"
              height={300}
              width={250}
            />
          </button>
          <button
            className={`${style["preview-btn"]} ${style["btn-opacity"]} rounded-3 m-auto shadow p-5`}
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,0.33)",
              opacity: previewItem[3] ? "1" : "0",
            }}
            onClick={() => handlePreviewState(3)}
          >
            <img
              className="m-auto"
              src={previewImage3}
              alt="preview"
              height={300}
              width={250}
            />
          </button>
        </div>
        <div className={`${selectQRCode ? 'd-flex' : 'd-none' } justify-content-center mt-5`}>
          <button className="btn btn-primary " onClick={downloadImage}>
            DOWNLOAD YOUR AI GENERATED QR CODECODE
          </button>
        </div>
      </>
    );
  };

  const Breadcrumbs = () => {
    return (
      <div className="w-100 text-start py-3">
        <Link
          className="me-4 fs-6"
          style={{ textDecoration: "none", color: "#979797" }}
          to="/"
        >
          HOME
        </Link>
        <span
          className="me-4 fs-6"
          style={{ textDecoration: "none", color: "#979797" }}
        >
          &#62;
        </span>
        <Link
          className="me-4 fs-6"
          style={{ textDecoration: "none", color: "#979797" }}
          to="/qr-generator"
        >
          QR GENERATOR
        </Link>
      </div>
    );
  };

  return (
    <section className={`${style["background-blue"]} pt-3 pb-5`}>
      <div className="container">
        <Breadcrumbs />
        <h1 className="text-center text-light">
          ADD WALLET ADDRESS <br />
          INSIDE YOUR OWN QR GENERATOR
        </h1>

        <PromptArea />

        <QrGenerateArea />
      </div>

      {isModalActive == true && <ScanWalletModalArea />}
    </section>
  );
}
