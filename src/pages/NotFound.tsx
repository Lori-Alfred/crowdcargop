import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-row ">
        <p className="align-self-center">
          The Desired page you page you are searching for is not available
        </p>
        <small
          className="p-4"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back{" "}
        </small>
      </div>
    </>
  );
};

export default NotFound;
