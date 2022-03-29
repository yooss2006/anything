import create from "zustand";

const weatherStore = create((set) => ({
  weather: "sunny",
  weatherChange(lodingWeather) {
    set((state) => ({ weather: lodingWeather }));
  },
}));

export default weatherStore;
