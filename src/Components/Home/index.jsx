import Spline from "@splinetool/react-spline";
import style from "./style.module.scss";
export default function Home() {
  const HeroFold = () => {
    return (
      <section
        className={`${style["hero-fold"]}`}
        style={{ background: "#0B0A0B" }}
      >
        <div className="text-center text-light w-100 pt-5 px-5">
          <h1>
            Unlock Seamless Crypto Payments with Scan Chain using Uniqode
            Platform
          </h1>
          <h3 className="py-5">
            Your AI-driven solution for personalized QR code generation and
            transaction management.
          </h3>
          <a href="/qr-generator">
            <button className="btn btn-primary py-2 px-5">
              Get Started Now
            </button>
          </a>
        </div>
        <div className="m-auto w-100">
          <Spline scene="https://prod.spline.design/IipS6Xglzvc0fN31/scene.splinecode" />
        </div>
      </section>
    );
  };

  const FeatureSection = () => {
    return (
      <section className={`container ${style["hero-fold"]}`}>
        <h2 className="py-5 mb-3 text-center">Feature ScanChain Has: </h2>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <div
            className={`border bg-opacity-25 rounded px-3 py-3 mt-7 ${style["bg-secondary-own"]} ${style["card"]}`}
          >
            <h4>AI-Enhanced Customization:</h4>
            <p className="mb-0 pb-0">
              Tailor your QR codes with personalized designs and color palettes
              suggested by our machine learning algorithms.
            </p>
          </div>
          <div
            className={`border bg-opacity-25 rounded px-3 py-3 mt-7 ${style["bg-secondary-own"]} ${style["card"]}`}
          >
            <h4>Multi-Blockchain Support:</h4>
            <p className="mb-0 pb-0">
              Start with Solana and easily transition to other blockchains as we
              expand, ensuring versatility for all your crypto needs.
            </p>
          </div>
          <div
            className={`border bg-opacity-25 rounded px-3 py-3 mt-7 ${style["bg-secondary-own"]} ${style["card"]}`}
          >
            <h4>Dynamic QR Codes:</h4>
            <p className="mb-0 pb-0">
              Create QR codes that can be updated in real-time, so you never
              have to worry about changing wallet addresses or payment details..
            </p>
          </div>
          <div
            className={`border bg-opacity-25 rounded px-3 py-3 mt-7 ${style["bg-secondary-own"]} ${style["card"]}`}
          >
            <h4>Real-Time Transaction Dashboard:</h4>
            <p className="mb-0 pb-0">
              Monitor your incoming and outgoing transactions effortlessly with
              our intuitive dashboard, powered by Web 3.0 APIs..
            </p>
          </div>
          <div
            className={`border bg-opacity-25 rounded px-3 py-3 mt-7 ${style["bg-secondary-own"]} ${style["card"]}`}
          >
            <h4>Auto Design V2 : </h4>
            <p className="mb-0 pb-0">
              Integrate auto design v2 while creating qr code
            </p>
          </div>
        </div>
      </section>
    );
  };
  const More = () => {
    return (
      <section
        className={`${style[""]}`}
        style={{ background: "#030404", paddingBottom: "100px",paddingTop: "100px" }}
      >
        <div className="text-light">
          <div style={{ width: "100%" }} className="container py-5 mb-5">
            <div className="d-flex gap-2">
              <div>
                <h2>Smart Alerts and Insights</h2>
                <p>
                  Stay informed with AI-driven notifications for important
                  activities, such as incoming transactions, to enhance your
                  engagement and decision-making.
                </p>
              </div>
              <div>
                <h2>Easy Sharing Options</h2>
                <p>
                  Effortlessly share your QR codes across social media, email,
                  or messaging apps, and export in multiple formats (PNG) for
                  any occasion.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="mt-5">Call to Action</h3>
              <p>Ready to revolutionize your crypto experience?</p>
              <a href="/qr-generator">
                <button className="btn btn-primary">Get Started Today!</button>
              </a>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Spline scene="https://prod.spline.design/RzVprxhPPXsSMn9f/scene.splinecode" />
          </div>
        </div>
      </section>
    );
  };
  const ProblemStatement = () => {
    return <></>;
  };
  const TargetAudience = () => {
    return <></>;
  };

  return (
    <>
      <HeroFold />
      <FeatureSection />
      <More />
    </>
  );
}
