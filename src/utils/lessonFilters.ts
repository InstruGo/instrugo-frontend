export const lessonFilters = () => {
  const now = new Date();

  // Today filter
  // From midnight today to midnight tomorrow
  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setDate(now.getDate() + 1);
  todayEnd.setUTCHours(0, 0, 0, 0);

  const todayFilter = {
    status: 'pending',
    after: todayStart.toISOString(),
    before: todayEnd.toISOString(),
  };

  // Next week filter
  const weekAfterDate = new Date();
  weekAfterDate.setDate(now.getDate() + 7);

  const nextWeekFilter = {
    status: 'pending',
    before: weekAfterDate.toISOString(),
  };

  // Upcoming filter
  const upcomingFilter = {
    status: 'pending',
    after: todayEnd.toISOString(),
  };

  return {
    todayFilter,
    nextWeekFilter,
    upcomingFilter,
  };
};
