export interface RealHoursStatus {
  isOpen: boolean;
  statusBadge: string;
  statusDetail: string;
  kitchenStatus: string;
}

export function getTodayHoursStatus(): RealHoursStatus {
  // Columbus, Ohio is America/New_York (Eastern Time)
  const now = new Date();
  const easternString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
  const easternDate = new Date(easternString);

  const day = easternDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  const hour = easternDate.getHours();
  const minute = easternDate.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Mon (1) & Tue (2) = CLOSED
  if (day === 1 || day === 2) {
    return {
      isOpen: false,
      statusBadge: 'Closed Today',
      statusDetail: 'Monday & Tuesday Closed · Reopens Wednesday at 6:00 AM',
      kitchenStatus: 'Kitchen opens Wednesday 6:00 AM'
    };
  }

  // Wednesday to Saturday: 6:00 AM (360) - 2:30 PM (870)
  // Kitchen closes at 2:00 PM (840)
  if (day >= 3 && day <= 6) {
    const openMin = 6 * 60; // 6:00 AM
    const kitchenCloseMin = 14 * 60; // 2:00 PM
    const doorsCloseMin = 14 * 60 + 30; // 2:30 PM

    if (currentMinutes >= openMin && currentMinutes < doorsCloseMin) {
      if (currentMinutes >= kitchenCloseMin) {
        return {
          isOpen: true,
          statusBadge: 'Open Now (Counter Only)',
          statusDetail: 'Donut counter open until 2:30 PM · Kitchen closed for the day',
          kitchenStatus: 'Kitchen closed at 2:00 PM'
        };
      }
      return {
        isOpen: true,
        statusBadge: 'Open Today',
        statusDetail: 'Open until 2:30 PM · Kitchen serving breakfast & lunch until 2:00 PM',
        kitchenStatus: 'Full diner kitchen open until 2:00 PM'
      };
    } else if (currentMinutes < openMin) {
      return {
        isOpen: false,
        statusBadge: 'Opens today at 6:00 AM',
        statusDetail: 'Fresh donuts and coffee rolling out at 6:00 AM today',
        kitchenStatus: 'Kitchen opens today at 6:00 AM'
      };
    } else {
      const nextDayName = day === 6 ? 'Sunday at 7:00 AM' : 'tomorrow at 6:00 AM';
      return {
        isOpen: false,
        statusBadge: 'Closed for the Day',
        statusDetail: `Doors close at 2:30 PM · Opens ${nextDayName}`,
        kitchenStatus: `Kitchen resets for morning batch`
      };
    }
  }

  // Sunday (0): 7:00 AM (420) - 2:30 PM (870)
  // Kitchen closes at 2:00 PM (840)
  if (day === 0) {
    const openMin = 7 * 60; // 7:00 AM
    const kitchenCloseMin = 14 * 60; // 2:00 PM
    const doorsCloseMin = 14 * 60 + 30; // 2:30 PM

    if (currentMinutes >= openMin && currentMinutes < doorsCloseMin) {
      if (currentMinutes >= kitchenCloseMin) {
        return {
          isOpen: true,
          statusBadge: 'Open Now (Counter Only)',
          statusDetail: 'Donut counter open until 2:30 PM · Kitchen closed at 2:00 PM',
          kitchenStatus: 'Kitchen closed at 2:00 PM'
        };
      }
      return {
        isOpen: true,
        statusBadge: 'Open Sunday',
        statusDetail: 'Open until 2:30 PM · Kitchen serving all day breakfast until 2:00 PM',
        kitchenStatus: 'Full diner kitchen open until 2:00 PM'
      };
    } else if (currentMinutes < openMin) {
      return {
        isOpen: false,
        statusBadge: 'Opens today at 7:00 AM',
        statusDetail: 'Fresh Sunday batch ready at 7:00 AM today',
        kitchenStatus: 'Kitchen opens today at 7:00 AM'
      };
    } else {
      return {
        isOpen: false,
        statusBadge: 'Closed for the Week',
        statusDetail: 'Closed Monday & Tuesday · Reopens Wednesday at 6:00 AM',
        kitchenStatus: 'Reopens Wednesday at 6:00 AM'
      };
    }
  }

  return {
    isOpen: false,
    statusBadge: 'Wed–Sun Diner',
    statusDetail: 'Wed–Sat 6:00 AM – 2:30 PM · Sun 7:00 AM – 2:30 PM (Kitchen closes 2:00 PM)',
    kitchenStatus: 'Kitchen closes 2:00 PM daily'
  };
}
