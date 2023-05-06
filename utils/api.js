import mockEventData from "../public/mock_data/event_data.json";

export const loadEventsForSpecificMonthYear = async (month, year, filePath) => {
  const key = `eventList_${month.toString()}_${year}`;
  return mockEventData[key] || [];
};
