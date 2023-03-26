def alarm_clock(day, vacation):
  return ("10:00" if day in (0,6) else "7:00") if not vacation else ("off" if day in (0,6) else "10:00")