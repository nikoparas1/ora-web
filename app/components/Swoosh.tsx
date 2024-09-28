import SwooshSVG from "../../public/assets/images/swoosh.svg";

const Swoosh = () => {
    return (
      <div className="swoosh-container">
        <SwooshSVG style={{ fill: "var(--primary)" }} />
      </div>
    );
}

export default Swoosh;