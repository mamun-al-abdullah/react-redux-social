export function generateRandomId(min : number, max : number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  


export function getTimeElapsed(givenTime : Date): string {
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - givenTime.getTime();
  
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Approximate number of days in a month
    const years = Math.floor(months / 12);
  
    if (seconds < 10) {
      return `Now`;
    }else if (seconds < 60) {
      return `Few seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months < 12) {
      return `${months} months ago`;
    } else {
      return `${years} years ago`;
    }
  }
  