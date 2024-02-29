export const setTagColor = (tag) => {
  switch (tag) {
    case "history":
      return "text-gray-100 bg-blue-500 hover:bg-blue-600";
    case "american":
      return "text-gray-100 bg-pink-500 hover:bg-pink-600";
    case "crime":
      return "text-gray-100 bg-teal-500 hover:bg-teal-600";
    case "french":
      return "text-gray-100 bg-green-500 hover:bg-green-600";
    default:
      return "text-gray-100 bg-purple-600 hover:bg-purple-700";
  }
};
