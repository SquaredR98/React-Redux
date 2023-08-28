import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Hello On click....");
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick}>Button Plain</Button>
      </div>
      <div>
        <Button primary rounded outline>
          Button Primary
        </Button>
      </div>
      <div>
        <Button secondary>Button Secondary</Button>
      </div>
      <div>
        <Button warning>Button Warning</Button>
      </div>
      <div>
        <Button success>Button Success</Button>
      </div>
      <div>
        <Button danger>Button Danger</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
