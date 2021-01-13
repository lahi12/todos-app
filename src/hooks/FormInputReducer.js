const FormInputReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "summary":
      return { ...state, summary: action.payload };
    case "toggle":
      return {
        ...state,
        scheduleInfo: {
          ...state.scheduleInfo,
          isScheduled: !state.scheduleInfo.isScheduled,
        },
      };
    case "schedule":
      return {
        ...state,
        scheduleInfo: { ...state.scheduleInfo, date: action.payload },
      };
    default:
      return state;
  }
};

export default FormInputReducer;
