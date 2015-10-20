module.exports.setReminders = function(reminders) {
  return {
    type: 'SET_REMINDERS',
    reminders: reminders
  };
};
