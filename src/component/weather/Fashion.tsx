import { clothesSelect } from "./weatherFunc";

type TWHprops = {
  weatherInformation: {
    temperature: number;
    weatherCode: number;
    humidity: number;
  };
  isSmallMode: boolean;
};

const Fashion = ({ weatherInformation, isSmallMode }: TWHprops) => {
  const temperature = weatherInformation.temperature;
  return (
    <article className="weatherCommon fashion">
      {isSmallMode ? null : (
        <>
          <h3>fashion</h3>
          <img
            src={clothesSelect(Math.ceil(temperature))}
            className="clothesImg"
          />
        </>
      )}
      <p>
        <strong>{Math.ceil(temperature)}</strong>°C
      </p>
    </article>
  );
};

export default Fashion;
